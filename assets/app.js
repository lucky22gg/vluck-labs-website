document.getElementById("year").textContent=new Date().getFullYear();

const header=document.querySelector(".site-header");
window.addEventListener("scroll",()=>{
  header.style.background=window.scrollY>20?"rgba(7,9,13,.92)":"rgba(7,9,13,.72)";
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const id=a.getAttribute("href");
    const el=document.querySelector(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("mousemove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});
