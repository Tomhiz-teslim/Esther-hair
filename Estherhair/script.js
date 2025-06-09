const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlideIndex = 0;

function changeSlide() {
    carouselSlides.forEach((slide) => {
        slide.classList.remove('active');
    });

    carouselSlides[currentSlideIndex].classList.add('active');
    currentSlideIndex = (currentSlideIndex + 1) % carouselSlides.length;
}

setInterval(changeSlide, 2000);

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.catRepo');
    const items = carousel.querySelectorAll('a');
    const itemWidth = items[0].offsetWidth + 10;
    let position = 0;

    for (let i = 0; i < items.length; i++) {
        const clone = items[i].cloneNode(true);
        carousel.appendChild(clone);
    }

    function moveCarousel() {
        position -= itemWidth;

        if (Math.abs(position) >= items.length * itemWidth) {
            position = 0;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${position}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            });
        } else {
            carousel.style.transform = `translateX(${position}px)`;
        }
    }

    setInterval(moveCarousel, 2000);
});

const dynamicNav = document.getElementById("head");

function changeBackColor() {
    if (window.scrollY > 20) {
        dynamicNav.classList.add("head-active");
    } else {
        dynamicNav.classList.remove("head-active");
    }
}

window.addEventListener("scroll", changeBackColor);

const allLinks = document.querySelectorAll('nav ul li a, .mobile-menu ul li a');
const currentPage = window.location.pathname.toLowerCase().split('/').pop().split('?')[0].split('#')[0];
const aboutPages = ['about.html', 'services.html', 'gallery.html', 'contact.html'];

allLinks.forEach(link => link.classList.remove('active'));

if (currentPage === '' || currentPage === 'index.html') {
    allLinks.forEach(link => {
        if (link.getAttribute('href').includes('index.html')) {
            link.classList.add('active');
        }
    });
} else {
    allLinks.forEach(link => {
        const href = link.getAttribute('href').toLowerCase().split('/').pop().split('?')[0].split('#')[0];
        if (href === currentPage) {
            link.classList.add('active');
            if (aboutPages.includes(currentPage)) {
                const aboutParent = document.querySelector('#about');
                if (aboutParent) aboutParent.classList.add('active');
            }
        }
    });
}

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    menuToggle.classList.add('hide'); // Hide hamburger icon
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.classList.remove('hide'); // Show hamburger icon again
});

document.querySelectorAll('.mobile-menu ul li a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('hide'); // Show hamburger icon again
    });
});

