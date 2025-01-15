document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Gallery Images
    const galleryImages = [
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300',
        '/placeholder.svg?height=200&width=300'
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Populate gallery
    galleryImages.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Gallery Image';
        galleryGrid.appendChild(img);
    });

    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // Blog post view counter simulation
    document.querySelectorAll('.views').forEach(view => {
        let count = parseInt(view.textContent);
        view.addEventListener('click', () => {
            count++;
            view.textContent = count + ' views';
        });
    });

    // Add hover effect to navigation links
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        });
        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                item.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
            }
        });
    });

    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    setInterval(showNextTestimonial, 5000);

    // Scroll to top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '&uarr;';
    scrollToTopButton.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Smooth reveal animation for sections
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 150) {
                section.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    window.addEventListener('load', revealSections);

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Animated counter for stats
    const animateCounter = (element, target) => {
        let count = 0;
        const speed = 2000 / target; // 2 seconds duration
        const updateCount = () => {
            if (count < target) {
                count++;
                element.textContent = count;
                requestAnimationFrame(updateCount);
            }
        };
        updateCount();
    };

    const statsSection = document.querySelector('.stats');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(stat => {
                animateCounter(stat, parseInt(stat.getAttribute('data-target')));
            });
            observer.unobserve(statsSection);
        }
    }, { threshold: 0.5 });

    observer.observe(statsSection);
});

