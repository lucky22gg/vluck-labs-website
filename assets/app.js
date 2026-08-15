document.getElementById("year").textContent=new Date().getFullYear();const h=document.querySelector(".site-header");window.addEventListener("scroll",()=>{h.style.background=window.scrollY>20?"rgba(7,9,13,.9)":"rgba(7,9,13,.72)"});document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const id=a.getAttribute("href"),el=document.querySelector(id);if(id.length>1&&el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"})}}));
// Premium v3 scroll reveal
const revealTargets=document.querySelectorAll('.section-heading,.problem-card,.bento,.platform-copy,.architecture,.roadmap-card,.about-card,.principles>div,.faq details,.cta');
revealTargets.forEach(el=>el.classList.add('reveal'));
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
revealTargets.forEach(el=>io.observe(el));
