// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const cursorDot = document.querySelector('.cursor-dot');

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved theme preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
}

// Custom cursor functionality
function updateCursor(e) {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
        cursorDot.style.display = 'block';
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    }
}

// Cursor hover effect
function enlargeCursor() {
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
}

function resetCursor() {
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
}

// Event listeners for cursor
document.addEventListener('mousemove', updateCursor);

// Add cursor effect to all interactive elements
const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', enlargeCursor);
    element.addEventListener('mouseleave', resetCursor);
});

// Check for system dark mode preference
function checkSystemThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (localStorage.getItem('darkMode') === null) {
            body.classList.add('dark-mode');
        }
    }
}

checkSystemThemePreference();

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemThemePreference);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Update active navigation link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.research-card, .publication-item, .blog-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Add fade-in animation class
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.appear {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // In a real application, you would send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });
} 