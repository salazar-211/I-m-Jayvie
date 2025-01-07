// Toggle mobile nav visibility on hamburger menu click
document.getElementById('hamburger-menu').addEventListener('click', function () {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
});

// Ensure mobile nav is hidden when resizing to desktop view
window.addEventListener('resize', function () {
    const mobileNav = document.getElementById('mobile-nav');
    if (window.innerWidth >= 1024) {
        mobileNav.style.display = 'none'; // Hide mobile nav
    }
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slides');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    // Function to update the carousel position
    function updateCarousel() {
        const slideWidth = slides.querySelector('.carousel-slide').offsetWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Previous button event listener
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.children.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Next button event listener
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.children.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Update carousel on window resize to ensure proper alignment
    window.addEventListener('resize', updateCarousel);
});
