const burger = document.getElementById("burger")
let menu = document.getElementById("menu")
let menuBack = document.getElementById("menuBack")

burger.addEventListener('click', () => {
    menu.classList.toggle("nav--active")
    menuBack.classList.toggle("nav__back--active")
})