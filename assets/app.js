(() => {
  'use strict';

  const state = {
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    finePointer: window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    heroInView: true,
    raf: 0
  };

  const q = (sel, root = document) => root.querySelector(sel);
  const qa = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function initYear() {
    const el = q('#year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initHeader() {
    const header = q('[data-header]');
    if (!header) return;
    const update = () => header.classList.toggle('scrolled', window.scrollY > 18);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initMobileMenu() {
    const button = q('[data-menu-toggle]');
    const menu = q('[data-mobile-menu]');
    if (!button || !menu) return;

    const close = () => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
      menu.classList.remove('open');
    };

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      menu.classList.toggle('open', !open);
    });

    qa('a', menu).forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => {
      if (!menu.contains(e.target) && !button.contains(e.target)) close();
    });
  }

  function initSmoothAnchors() {
    qa('a[href^="#"]').forEach(link => {
      link.addEventListener('click', event => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;
        const target = q(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: state.reducedMotion ? 'auto' : 'smooth', block: 'start' });
      });
    });
  }

  function initReveal() {
    const items = qa('[data-reveal]');
    if (!items.length || state.reducedMotion || !('IntersectionObserver' in window)) return;

    // Only hide elements once JS has confirmed it can reveal them.
    items.forEach((item, index) => {
      item.classList.add('reveal-ready', 'reveal-pending');
      item.style.transitionDelay = `${Math.min((index % 4) * 55, 165)}ms`;
    });

    const fallback = window.setTimeout(() => {
      items.forEach(item => item.classList.add('is-visible'));
    }, 1600);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -2% 0px' });

    items.forEach(item => observer.observe(item));
    window.addEventListener('load', () => window.clearTimeout(fallback), { once: true });
  }

  function initActiveNav() {
    const links = qa('[data-nav-link]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    const targets = links.map(link => q(link.getAttribute('href'))).filter(Boolean);
    const linkMap = new Map(links.map(link => [link.getAttribute('href').slice(1), link]));

    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(l => l.classList.remove('active'));
      const active = linkMap.get(visible.target.id);
      if (active) active.classList.add('active');
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, .1, .4, .8] });

    targets.forEach(target => observer.observe(target));
  }

  function initHeroDepth() {
    const stage = q('[data-hero-stage]');
    const plane = q('[data-product-plane]');
    if (!stage || !plane || state.reducedMotion || !state.finePointer || window.innerWidth < 900) return;

    const layers = qa('[data-hero-layer]', stage).filter(el => el !== plane);
    const reflection = q('[data-reflection]', stage);
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    let running = false;

    const render = () => {
      if (!running) return;
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;

      const rotateY = clamp(currentX * 1.65, -1.8, 1.8);
      const rotateX = clamp(-currentY * 1.05, -1.15, 1.15);
      plane.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${currentX * 3}px, ${currentY * 2}px, 0)`;

      layers.forEach(layer => {
        const depth = Number(layer.dataset.heroLayer || 0);
        const x = currentX * depth * 18;
        const y = currentY * depth * 14;
        layer.style.transform = `translate3d(${x}px, ${y}px, ${depth * 46}px)`;
      });

      if (reflection) reflection.style.setProperty('--rx', `${-24 + (currentX + 1) * 28}%`);
      state.raf = requestAnimationFrame(render);
    };

    const start = () => {
      if (running) return;
      running = true;
      state.raf = requestAnimationFrame(render);
    };
    const stop = () => {
      running = false;
      if (state.raf) cancelAnimationFrame(state.raf);
      state.raf = 0;
    };

    stage.addEventListener('pointermove', event => {
      const r = stage.getBoundingClientRect();
      targetX = clamp(((event.clientX - r.left) / r.width - .5) * 2, -1, 1);
      targetY = clamp(((event.clientY - r.top) / r.height - .5) * 2, -1, 1);
    }, { passive: true });
    stage.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });

    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? start() : stop());
    }, { threshold: .05 });
    visibility.observe(stage);
  }

  function initCardLight() {
    if (state.reducedMotion || !state.finePointer) return;
    qa('[data-card]').forEach(card => {
      let targetX = 0, targetY = 0, currentX = 0, currentY = 0, raf = 0, hovering = false;

      const render = () => {
        if (!hovering) return;
        currentX += (targetX - currentX) * .11;
        currentY += (targetY - currentY) * .11;
        card.style.transform = `perspective(1200px) rotateX(${currentY * -0.8}deg) rotateY(${currentX * 0.95}deg) translateY(-0.5px)`;
        raf = requestAnimationFrame(render);
      };

      card.addEventListener('pointerenter', () => { hovering = true; if (!raf) raf = requestAnimationFrame(render); });
      card.addEventListener('pointermove', event => {
        const r = card.getBoundingClientRect();
        const px = (event.clientX - r.left) / r.width;
        const py = (event.clientY - r.top) / r.height;
        targetX = clamp((px - .5) * 2, -1, 1);
        targetY = clamp((py - .5) * 2, -1, 1);
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
      }, { passive: true });
      card.addEventListener('pointerleave', () => {
        hovering = false; targetX = 0; targetY = 0; currentX = 0; currentY = 0;
        if (raf) cancelAnimationFrame(raf); raf = 0; card.style.transform = '';
      });
    });
  }

  function initFAQ() {
    qa('.faq details').forEach(detail => {
      detail.addEventListener('toggle', () => {
        if (!detail.open) return;
        qa('.faq details').forEach(other => { if (other !== detail) other.open = false; });
      });
    });
  }

  function init() {
    const tasks = [initYear, initHeader, initMobileMenu, initSmoothAnchors, initReveal, initActiveNav, initHeroDepth, initCardLight, initFAQ];
    tasks.forEach(fn => {
      try { fn(); } catch (error) { console.warn(`[VLuck] ${fn.name} skipped:`, error); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
