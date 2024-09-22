document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', () => {
    // Existing code...
    // (Keep all the previous code here)

    // New code for hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroImage = document.querySelector('.hero-image img');
    const ctaButtons = document.querySelector('.cta-buttons');

    // Function to add class with delay
    const addClassWithDelay = (element, className, delay) => {
        setTimeout(() => {
            element.classList.add(className);
        }, delay);
    };

    // Animate hero elements
    addClassWithDelay(heroTitle, 'fade-in-up animated', 200);
    addClassWithDelay(heroSubtitle, 'fade-in-up animated', 400);
    addClassWithDelay(heroImage, 'fade-in-up animated', 600);
    addClassWithDelay(ctaButtons, 'fade-in-up animated', 800);

    // Animate highlight words in hero title
    const animateHighlight = () => {
        const highlightElement = document.querySelector('.hero-highlight');
        const words = ['Notion Workspace', 'Productivity', 'Organization', 'Collaboration'];
        let currentIndex = 0;

        setInterval(() => {
            highlightElement.style.opacity = 0;
            setTimeout(() => {
                highlightElement.textContent = words[currentIndex];
                highlightElement.style.opacity = 1;
                currentIndex = (currentIndex + 1) % words.length;
            }, 500);
        }, 3000);
    };

    animateHighlight();

    // Parallax effect for hero image
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    });

    // Interactive CTA buttons
    const ctaPrimary = document.querySelector('.cta-button.primary');
    const ctaSecondary = document.querySelector('.cta-button.secondary');

    ctaPrimary.addEventListener('mouseenter', () => {
        ctaPrimary.style.transform = 'scale(1.05)';
    });

    ctaPrimary.addEventListener('mouseleave', () => {
        ctaPrimary.style.transform = 'scale(1)';
    });

    ctaSecondary.addEventListener('mouseenter', () => {
        ctaSecondary.style.transform = 'scale(1.05)';
    });

    ctaSecondary.addEventListener('mouseleave', () => {
        ctaSecondary.style.transform = 'scale(1)';
    });

    // Add a subtle animation to the hero background
    const hero = document.querySelector('.hero');
    let angle = 0;

    function animateHeroBackground() {
        angle += 0.02;
        const sinValue = Math.sin(angle);
        const shade1 = Math.round(240 + sinValue * 10);
        const shade2 = Math.round(244 + sinValue * 10);
        const shade3 = Math.round(248 + sinValue * 10);
        
        hero.style.background = `linear-gradient(45deg, rgb(${shade1}, ${shade2}, ${shade3}), rgb(${shade2}, ${shade3}, ${shade1}))`;
        requestAnimationFrame(animateHeroBackground);
    }

    animateHeroBackground();
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

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Template preview modal
    const previewButtons = document.querySelectorAll('.template-button');
    const modal = document.createElement('div');
    modal.classList.add('preview-modal');
    document.body.appendChild(modal);

    previewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const templateImage = button.closest('.template-item').querySelector('img').src;
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${templateImage}" alt="Template Preview">
                </div>
            `;
            modal.style.display = 'flex';

            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Testimonial carousel
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

    // Sticky header
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            header.style.transform = `translateY(-${headerHeight}px)`;
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
});
