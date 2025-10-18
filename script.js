const navLinks = document.querySelectorAll(".nav-menu .nav-item");
const navOpenButton = document.querySelector('#menu-open-button');
const navCloseButton = document.querySelector('#menu-close-button');

navOpenButton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menu")
})

//close button 
navCloseButton.addEventListener("click", ()=>navOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});


//fadeup


document.addEventListener("DOMContentLoaded", () => {
  const fadeTargets = document.querySelectorAll(".fadeUp");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // 一度表示したら監視解除
      }
    });
  }, { threshold: 0.2 }); // 20%見えたら発火

  fadeTargets.forEach(target => observer.observe(target));
});

