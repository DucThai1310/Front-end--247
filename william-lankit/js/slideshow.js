const slides = document.querySelectorAll('.testimonials__slider--item');
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}
function changeSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
    const slideContainer = document.querySelector('.testimonials__slider--card--list');
    slideContainer.style.justifyContent = 'center';
    slideContainer.style.alignItems = 'center';
}
showSlide(0);
setInterval(changeSlide, 5000);