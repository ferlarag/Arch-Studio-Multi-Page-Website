const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menuBack = document.getElementById("menuBack");
const header = document.querySelector("header");
const carouselBtns = document.getElementById("carouselPicker").children;
const slider = document.getElementById("bannerSlider");
function resetButtons(arr) {
    for (const btn of arr){
        btn.classList.remove("banner__select-btn--active");
        btn.classList.add("banner__select-btn");
    }
}
function setButton(btn) {
    btn.classList.remove("banner__select-btn");
    btn.classList.add("banner__select-btn--active");
}
for(let i = 0; i < carouselBtns.length; i++){
    const btn = carouselBtns[i];
    btn.addEventListener("click", ()=>{
        slider.style = `transform: translateX(-${i * 100}%)`;
        resetButtons(carouselBtns);
        setButton(btn);
    });
}
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
//google maps goes here
function initMap() {
    const main = {
        lat: 35.647429074308405,
        lng: -88.38953452379704
    };
    const second = {
        lat: 33.90137529454933,
        lng: -98.62251640254358
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.5,
        center: main
    });
    const markers = [
        {
            position: {
                lat: 35.647429074308405,
                lng: -88.38953452379704
            },
            map: map,
            title: "Main Office"
        },
        {
            position: {
                lat: 33.90137529454933,
                lng: -98.62251640254358
            },
            map: map,
            title: "Second Office"
        }
    ];
    for(let i = 0; i < markers.length; i++)new google.maps.Marker(markers[i]);
}
window.initMap = initMap;

//# sourceMappingURL=index.8f0c9192.js.map
