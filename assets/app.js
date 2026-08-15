(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.style.background = window.scrollY > 20 ? 'rgba(7,9,13,.92)' : 'rgba(7,9,13,.72)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
  });

  if ('IntersectionObserver' in window && !reduced) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  if (reduced || coarse) return;

  const stage = document.querySelector('[data-parallax-stage]');
  const object = document.querySelector('[data-tilt-root]');
  const depthEls = stage ? [...stage.querySelectorAll('[data-depth]')] : [];

  let tx = 0, ty = 0, cx = 0, cy = 0;
  let raf = null;

  const animateStage = () => {
    cx += (tx - cx) * 0.075;
    cy += (ty - cy) * 0.075;

    if (object) {
      const rotY = cx * 4.2;
      const rotX = -cy * 3.2;
      object.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${cx * 4}px, ${cy * 3}px, 0)`;
    }

    depthEls.forEach(el => {
      if (el === object) return;
      const depth = parseFloat(el.dataset.depth || '0');
      el.style.transform = `translate3d(${cx * depth * 30}px, ${cy * depth * 24}px, ${Math.abs(depth) * 70}px)`;
    });

    raf = requestAnimationFrame(animateStage);
  };

  if (stage) {
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    });

    stage.addEventListener('pointerleave', () => {
      tx = 0;
      ty = 0;
    });

    raf = requestAnimationFrame(animateStage);
  }

  const cards = [...document.querySelectorAll('[data-tilt-card]')];

  cards.forEach(card => {
    let rx = 0, ry = 0, crx = 0, cry = 0, cardRaf = null;

    const run = () => {
      crx += (rx - crx) * 0.12;
      cry += (ry - cry) * 0.12;
      card.style.transform = `perspective(900px) rotateX(${cry * -2.2}deg) rotateY(${crx * 2.2}deg) translateY(-1px)`;
      cardRaf = requestAnimationFrame(run);
    };

    card.addEventListener('pointerenter', () => {
      if (!cardRaf) cardRaf = requestAnimationFrame(run);
    });

    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      rx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ry = ((e.clientY - r.top) / r.height - 0.5) * 2;
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });

    card.addEventListener('pointerleave', () => {
      rx = 0;
      ry = 0;
      setTimeout(() => {
        if (cardRaf) {
          cancelAnimationFrame(cardRaf);
          cardRaf = null;
          card.style.transform = '';
        }
      }, 220);
    });
  });

  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${x * 0.035}px, ${y * 0.05}px) translateY(-2px)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });

  window.addEventListener('beforeunload', () => {
    if (raf) cancelAnimationFrame(raf);
  });
})();
