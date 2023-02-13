const burger = document.getElementById("burger")
let menu = document.getElementById("menu")
let menuBack = document.getElementById("menuBack")

burger.addEventListener('click', () => {
    menu.classList.toggle("nav--active")
    menuBack.classList.toggle("nav__back--active")
})

menuBack.addEventListener('click', () => {
    menu.classList.toggle("nav--active")
    menuBack.classList.toggle("nav__back--active")
})

function initMap(){
    const main = {lat: 35.647429074308405,lng: -88.38953452379704}
    const second = {lat: 33.90137529454933,lng: -98.62251640254358}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.5,
        center: main,
    })

    const markers = [
        {
            position: {lat: 35.647429074308405,lng: -88.38953452379704},
            map: map,
            title: 'Main Office',
        },
        {
            position: {lat: 33.90137529454933,lng: -98.62251640254358},
            map: map,
            title: 'Second Office',
        }
    ]
    
    for (let i = 0; i < markers.length; i++){
        new google.maps.Marker(markers[i])
    }
}

window.initMap = initMap