// Element Building Co - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initial check in case page is loaded halfway down
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // 2. Mobile Menu Toggle (Basic implementation)
    // Note: In a full build, this would toggle a modal or expanding menu.
    // Kept simple here to stay focused on Elementor constraints.
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    // TODO: Add mobile menu overlay logic if required.
    
    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Offset for fixed header
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Subtle Entrance Animations (Intersection Observer)
    // Mirrors Elementor's "Fade In Up" entrance animation.
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Once animated, stop observing
            }
        });
    }, observerOptions);

    // Later: Add class 'animate-on-scroll' to elements in HTML that should fade in
    // document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
