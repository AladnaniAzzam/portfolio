// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const html = document.documentElement;
const body = document.body;

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    
    // Update header background immediately
    updateHeaderBackground();
});

// Language Toggle
langToggle.addEventListener('click', () => {
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    
    html.setAttribute('lang', newLang);
    body.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('language', newLang);
    
    // Update button text
    langToggle.querySelector('.lang-text').textContent = newLang.toUpperCase();
    
    // Update all translatable elements
    updateLanguage(newLang);
});

// Update language content
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Handle placeholders separately
    const placeholderElements = document.querySelectorAll('[data-en-placeholder][data-ar-placeholder]');
    placeholderElements.forEach(element => {
        const placeholder = element.getAttribute(`data-${lang}-placeholder`);
        element.placeholder = placeholder;
    });
    
    // Update HTML lang attribute and title
    html.setAttribute('lang', lang);
    document.title = lang === 'ar' ? 'عزام عدنان - محفظة متخصص تكنولوجيا المعلومات' : 'Azzam Adnan - IT Professional Portfolio';
}

// Initialize theme and language from localStorage
function initializeThemeAndLanguage() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'en';
    
    html.setAttribute('data-theme', savedTheme);
    html.setAttribute('lang', savedLang);
    body.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
    
    // Update UI elements
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    
    langToggle.querySelector('.lang-text').textContent = savedLang.toUpperCase();
    
    updateLanguage(savedLang);
}

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Scroll event listener for active navigation
window.addEventListener('scroll', updateActiveNavLink);

// Contact Form Validation and Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();
    
    // Validation
    let isValid = true;
    let errorMessage = '';
    
    if (!name) {
        errorMessage = 'Please enter your name';
        isValid = false;
    } else if (!email) {
        errorMessage = 'Please enter your email address';
        isValid = false;
    } else if (!isValidEmail(email)) {
        errorMessage = 'Please enter a valid email address';
        isValid = false;
    } else if (!message) {
        errorMessage = 'Please enter your message';
        isValid = false;
    }
    
    if (!isValid) {
        showNotification(errorMessage, 'error');
        return;
    }
    
    // Create email content
    const emailSubject = subject ? `Portfolio Contact: ${subject}` : 'Portfolio Contact Form';
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:azzam.adnan@email.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Thank you for your message! Your email client should open shortly.', 'success');
    
    // Reset form
    this.reset();
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add fade-in animation to elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Run animation check on load
    animateOnScroll();
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Header background on scroll
function updateHeaderBackground() {
    const header = document.querySelector('.header');
    const computedStyle = getComputedStyle(document.documentElement);
    const whiteColor = computedStyle.getPropertyValue('--white').trim();
    
    if (window.scrollY > 50) {
        header.style.background = whiteColor.replace('rgb', 'rgba').replace(')', ', 0.98)');
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = whiteColor.replace('rgb', 'rgba').replace(')', ', 0.95)');
        header.style.boxShadow = 'var(--shadow-sm)';
    }
}

window.addEventListener('scroll', updateHeaderBackground);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeThemeAndLanguage();
    updateActiveNavLink();
    updateHeaderBackground();
});

// Ensure images are visible
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.3s ease-in-out';
    });
});

// Print-friendly styles
window.addEventListener('beforeprint', function() {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('print-mode');
});
