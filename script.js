// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Responsive Mobile Menu Toggle
    // Requires a button or element with class 'menu-toggle' in your HTML for the hamburger icon
    // Requires CSS to style the menu and toggle the 'active' class on the nav or ul

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul'); // Adjust selector if needed

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click for mobile
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }


    // 2. Scroll-to-Top Button
    // Requires a button or element with class 'scroll-to-top' in your HTML
    // Requires CSS to style and hide/show the button

    const scrollToTopButton = document.querySelector('.scroll-to-top');

    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // 3. Dark Mode Toggle
    // Requires a button or element with ID 'darkModeToggle' in your HTML
    // Requires CSS rules under a '.dark-mode' class on the body to define dark mode styles

    const darkModeToggle = document.getElementById('darkModeToggle');

    if (darkModeToggle) {
        const enableDarkMode = () => {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            // Optional: Change button text/icon
             if (darkModeToggle) darkModeToggle.innerHTML = '☀️';
        };

        const disableDarkMode = () => {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
             // Optional: Change button text/icon
            if (darkModeToggle) darkModeToggle.innerHTML = '🌙';
        };

        // Check for saved theme in local storage on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            enableDarkMode();
        } else {
            disableDarkMode(); // Default to light mode if no preference saved
        }

        darkModeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }


    // 4. Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Adjust for fixed header height if necessary
                const headerHeight = document.querySelector('nav') ? document.querySelector('nav').offsetHeight : 0;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });


    // 5. Optional: Simple Form Validation (Example - modify for your form)
    const contactForm = document.querySelector('#contact-form'); // Replace with your form ID or selector

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Example validation (replace with your form field IDs and validation logic)
            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const messageInput = contactForm.querySelector('#message');

            let isValid = true;

            if (nameInput && nameInput.value.trim() === '') {
                alert('Please enter your name.');
                isValid = false;
            }

            if (emailInput && (emailInput.value.trim() === '' || !isValidEmail(emailInput.value))) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            if (messageInput && messageInput.value.trim() === '') {
                alert('Please enter your message.');
                isValid = false;
            }

            if (isValid) {
                // If form is valid, you can submit it using AJAX or standard submission
                alert('Form submitted successfully!');
                // contactForm.submit(); // Uncomment to submit the form
            }
        });
    }

    // Helper function for basic email validation
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});
