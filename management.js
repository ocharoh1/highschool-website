document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Management Team Data
    const managementTeam = [
        { name: 'Jane Smith', title: 'Principal', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Michael Johnson', title: 'Vice Principal', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Sarah Brown', title: 'Head of Administration', image: '/placeholder.svg?height=250&width=250' }
    ];

    // Staff Team Data
    const staffTeam = [
        { name: 'David Wilson', title: 'Senior Teacher', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Emily Davis', title: 'English Teacher', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Robert Taylor', title: 'Math Teacher', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Lisa Anderson', title: 'Science Teacher', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Daniel White', title: 'Physical Education Teacher', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Olivia Martin', title: 'Art Teacher', image: '/placeholder.svg?height=250&width=250' },
        { name: 'James Thompson', title: 'Music Teacher', image: '/placeholder.svg?height=250&width=250' }
    ];

    // Non-Staff Team Data
    const nonStaffTeam = [
        { name: 'Karen Lee', title: 'School Counselor', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Thomas Clark', title: 'IT Support', image: '/placeholder.svg?height=250&width=250' },
        { name: 'Nancy Rodriguez', title: 'Librarian', image: '/placeholder.svg?height=250&width=250' },
        { name: 'George Baker', title: 'Facilities Manager', image: '/placeholder.svg?height=250&width=250' }
    ];

    // Function to create team member card
    function createTeamMember(member) {
        return `
            <div class="team-member fade-in">
                <img src="${member.image}" alt="${member.name}">
                <div class="team-member-info">
                    <h3>${member.name}</h3>
                    <p>${member.title}</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        `;
    }

    // Populate team sections
    document.querySelector('.management-team .team-grid').innerHTML = 
        managementTeam.map(member => createTeamMember(member)).join('');

    document.querySelector('.staff-team .team-grid').innerHTML = 
        staffTeam.map(member => createTeamMember(member)).join('');

    document.querySelector('.non-staff-team .team-grid').innerHTML = 
        nonStaffTeam.map(member => createTeamMember(member)).join('');

    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
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

