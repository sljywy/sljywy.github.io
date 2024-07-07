let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlides(); // Show the first slide initially

    // Add event listener for mouse wheel
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            moveSlide(-1); // Scroll up
        } else {
            moveSlide(1); // Scroll down
        }
    });
});
