const track = document.querySelector(".carousel-track")
const slides = document.querySelectorAll(".carousel-track img")
const nextBtn = document.querySelector(".carousel-btn.next")
const prevBtn = document.querySelector(".carousel-btn.prev")

let index = 0;
const totalSlides = slides.length;

function updateCarousel(){
    track.style.transform = `translateX(-${index * 100}%)`
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
})

prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
})



let startX = 0;
let endX = 0;

track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
})

track.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe()
})

function handleSwipe(){
    const distance = startX - endX;

    if(distance > 50){
        index = (index + 1) % totalSlides;
    }else if(distance < -50){
        index = (index - 1 + totalSlides) % totalSlides;
    }

    updateCarousel();
}

const tracks = document.querySelector('.carousel-tracks')
const cards = document.querySelectorAll('.featured-card')
const prevbtns = document.querySelector('.prevt')
const nextbtns = document.querySelector('.nexts')

let indext = 0

function getCardWidth(){
    return cards[0].offsetWidth;
}

nextbtns.addEventListener('click', () => {
    indext = (indext + 1) % cards.length;
    tracks.style.transform = `translateX(-${indext * getCardWidth()}px)`
})

prevbtns.addEventListener('click', () => {
    indext = (indext - 1 + cards.length) % cards.length;
    tracks.style.transform = `translateX(-${indext * getCardWidth()}px)`
})