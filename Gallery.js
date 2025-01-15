document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Sample gallery data
    const galleryData = [
        { id: 1, category: 'classroom', image: '/placeholder.svg?height=250&width=250', title: 'Engaging Classroom Session' },
        { id: 2, category: 'events', image: '/placeholder.svg?height=250&width=250', title: 'Annual School Festival' },
        { id: 3, category: 'sports', image: '/placeholder.svg?height=250&width=250', title: 'Inter-School Sports Meet' },
        { id: 4, category: 'classroom', image: '/placeholder.svg?height=250&width=250', title: 'Science Experiment' },
        { id: 5, category: 'events', image: '/placeholder.svg?height=250&width=250', title: 'School Art Exhibition' },
        { id: 6, category: 'sports', image: '/placeholder.svg?height=250&width=250', title: 'Basketball Tournament' },
        { id: 7, category: 'classroom', image: '/placeholder.svg?height=250&width=250', title: 'Group Project Presentation' },
        { id: 8, category: 'events', image: '/placeholder.svg?height=250&width=250', title: 'Graduation Ceremony' },
        { id: 9, category: 'sports', image: '/placeholder.svg?height=250&width=250', title: 'Swimming Gala' },
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    let currentCategory = 'all';
    let visibleItems = 6;

    // Function to create gallery item
    function createGalleryItem(item) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item', 'fade-in');
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-item-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        return galleryItem;
    }

    // Function to filter and display gallery items
    function filterGallery(category) {
        currentCategory = category;
        visibleItems = 6;
        galleryGrid.innerHTML = '';
        const filteredItems = category === 'all' ? galleryData : galleryData.filter(item => item.category === category);
        filteredItems.slice(0, visibleItems).forEach(item => {
            galleryGrid.appendChild(createGalleryItem(item));
        });
        loadMoreBtn.style.display = filteredItems.length > visibleItems ? 'block' : 'none';
    }

    // Initialize gallery
    filterGallery('all');

    // Filter button click event
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterGallery(button.getAttribute('data-filter'));
        });
    });

    // Load more button click event
    loadMoreBtn.addEventListener('click', () => {
        visibleItems += 3;
        const filteredItems = currentCategory === 'all' ? galleryData : galleryData.filter(item => item.category === currentCategory);
        filteredItems.slice(visibleItems - 3, visibleItems).forEach(item => {
            galleryGrid.appendChild(createGalleryItem(item));
        });
        if (visibleItems >= filteredItems.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (validateEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
});

