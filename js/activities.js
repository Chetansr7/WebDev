function initializeSlideshow(slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    const slides = slideshow.querySelectorAll('.slide');
    const prevButton = slideshow.querySelector('.prev');
    const nextButton = slideshow.querySelector('.next');

    let currentIndex = 0;

    function updateSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
    }

    function navigateSlides(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % slides.length;
        } else {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }
        updateSlide();
    }

    prevButton.addEventListener('click', () => navigateSlides('prev'));
    nextButton.addEventListener('click', () => navigateSlides('next'));

    updateSlide();
}

// Initialize all slideshows
initializeSlideshow('slideshow1');
initializeSlideshow('slideshow2');
initializeSlideshow('slideshow3');
initializeSlideshow('slideshow4');
initializeSlideshow('slideshow5');
initializeSlideshow('slideshow6');