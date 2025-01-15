document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Sample news data
    const newsData = [
        { title: 'Students Win Regional Math Competition', date: 'May 20, 2023', image: '/placeholder.svg?height=200&width=300' },
        { title: 'New Art Exhibition Opens in School Gallery', date: 'May 15, 2023', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Annual Sports Day: A Grand Success', date: 'May 10, 2023', image: '/placeholder.svg?height=200&width=300' },
        { title: 'Parent-Teacher Conference Scheduled', date: 'May 5, 2023', image: '/placeholder.svg?height=200&width=300' },
        { title: 'School Choir Performs at City Hall', date: 'April 30, 2023', image: '/placeholder.svg?height=200&width=300' },
        { title: 'New STEM Lab Inaugurated', date: 'April 25, 2023', image: '/placeholder.svg?height=200&width=300' },
    ];

    // Sample events data
    const eventsData = [
        { title: 'End of Year Concert', date: 'June 15, 2023' },
        { title: 'Summer Camp Registration', date: 'June 1, 2023' },
        { title: 'Graduation Ceremony', date: 'May 30, 2023' },
        { title: 'Science Fair', date: 'May 25, 2023' },
    ];

    // Populate news items
    const newsContainer = document.querySelector('.news-container');
    let newsIndex = 0;

    function addNewsItems(count) {
        for (let i = 0; i < count && newsIndex < newsData.length; i++) {
            const news = newsData[newsIndex];
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item', 'fade-in');
            newsItem.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <div class="news-item-content">
                    <h3>${news.title}</h3>
                    <p class="date">${news.date}</p>
                    <a href="#" class="read-more-btn">Read More</a>
                </div>
            `;
            newsContainer.appendChild(newsItem);
            newsIndex++;
        }
    }

    // Initial news load
    addNewsItems(3);

    // Load more news
    const loadMoreBtn = document.querySelector('.load-more-btn');
    loadMoreBtn.addEventListener('click', () => {
        addNewsItems(3);
        if (newsIndex >= newsData.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // Populate events
    const eventsContainer = document.querySelector('.events-container');
    eventsData.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item', 'fade-in');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date">${event.date}</p>
        `;
        eventsContainer.appendChild(eventItem);
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

