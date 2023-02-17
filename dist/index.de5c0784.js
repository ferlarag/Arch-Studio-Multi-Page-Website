const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menuBack = document.getElementById("menuBack");
const header = document.querySelector("header");
//event listeners
//this two change the burger menu
burger.addEventListener("click", ()=>{
    menu.classList.toggle("nav--active");
    menuBack.classList.toggle("nav__back--active");
});
menuBack.addEventListener("click", ()=>{
    menu.classList.toggle("nav--active");
    menuBack.classList.toggle("nav__back--active");
});
//scrolling
let basePos = 100;
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.classList.remove("header--hidden");
        header.classList.add("header");
    } else if (window.pageYOffset > 100) {
        header.classList.remove("header");
        header.classList.add("header--hidden");
    }
    prevScrollPos = currentScrollPos;
};

//# sourceMappingURL=index.de5c0784.js.map
