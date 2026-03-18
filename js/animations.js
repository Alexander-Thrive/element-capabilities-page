/**
 * Element Building Co - Animation Logic
 * Using GSAP & ScrollTrigger for premium, architectural motion.
 */

// Wait for DOM and GSAP to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not found. Animations will be disabled.');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // 1. Header Scroll Effect
    const header = document.querySelector('.site-header');
    ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
            if (self.direction === 1) {
                header.classList.add('scrolled');
            } else if (self.scroll() < 50) {
                header.classList.remove('scrolled');
            }
        }
    });

    // 2. Reveal Text Animations
    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach(text => {
        const span = text.querySelector('span');
        gsap.to(span, {
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 90%',
            }
        });
    });

    // 3. Staggered Sections
    const fadeUps = document.querySelectorAll('.fade-up');
    fadeUps.forEach(item => {
        gsap.from(item, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
            }
        });
    });

    // 4. Image Parallax
    const parallaxImages = document.querySelectorAll('.parallax-img');
    parallaxImages.forEach(img => {
        gsap.to(img, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // 5. Capability Cards Stagger
    gsap.from('.capability-card', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.capabilities-grid',
            start: 'top 80%',
        }
    });

    // 6. Smooth Scroll (Native behavior already set, but GSAP could enhance it if needed)
});
