document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero section text animation
    const heroTexts = document.querySelectorAll('.hero-animated-text');
    let currentTextIndex = 0;

    function changeHeroText() {
        heroTexts[currentTextIndex].classList.remove('active');
        currentTextIndex = (currentTextIndex + 1) % heroTexts.length;
        heroTexts[currentTextIndex].classList.add('active');
    }

    setInterval(changeHeroText, 3000);
    heroTexts[0].classList.add('active');

    // Intersection Observer for fade-in and slide-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-item, .template-item, .testimonial-item, .faq-item').forEach(item => {
        observer.observe(item);
    });

    // Testimonial slider
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - testimonialCarousel.offsetLeft;
        scrollLeft = testimonialCarousel.scrollLeft;
    });

    testimonialCarousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    testimonialCarousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    testimonialCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialCarousel.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialCarousel.scrollLeft = scrollLeft - walk;
    });

    // Header shrink on scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        if (scrollTop > 100) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            // If the clicked item wasn't open, open it
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
});
