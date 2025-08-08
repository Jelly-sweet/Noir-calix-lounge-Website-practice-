const navLinks = document.querySelectorAll(".nav-menu .nav-item");
const navOpenButton = document.querySelector('#menu-open-button');
const navCloseButton = document.querySelector('#menu-close-button');

navOpenButton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menu")
})

//close button 押したらリストを閉じる
navCloseButton.addEventListener("click", ()=>navOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});
