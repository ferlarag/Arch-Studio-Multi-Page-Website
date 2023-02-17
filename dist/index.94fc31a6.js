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

//# sourceMappingURL=index.94fc31a6.js.map
