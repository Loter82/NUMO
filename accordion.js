/**
 * Accordion functionality for Process Steps
 */

document.addEventListener('DOMContentLoaded', function() {
    initProcessAccordion();
});

function initProcessAccordion() {
    const accordionSteps = document.querySelectorAll('.accordion-step');
    
    if (accordionSteps.length === 0) return;
    
    accordionSteps.forEach(step => {
        const header = step.querySelector('.step-header');
        
        // Click event for toggle
        header.addEventListener('click', function(e) {
            e.preventDefault();
            toggleAccordion(step);
        });
        
        // Add keyboard accessibility
        header.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion(step);
            }
        });
        
        // Make header focusable for accessibility
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
    });
}

function toggleAccordion(step) {
    const isActive = step.classList.contains('active');
    const header = step.querySelector('.step-header');
    
    // Toggle active state
    if (isActive) {
        step.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
    } else {
        step.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        
        // Smooth scroll to step if it's below viewport
        setTimeout(() => {
            const stepTop = step.getBoundingClientRect().top + window.pageYOffset;
            const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
            const offset = 20;
            
            if (step.getBoundingClientRect().top < headerHeight) {
                window.scrollTo({
                    top: stepTop - headerHeight - offset,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
}

// Optional: Close other accordions when opening one (uncomment if needed)
/*
function toggleAccordion(step) {
    const accordionSteps = document.querySelectorAll('.accordion-step');
    const isActive = step.classList.contains('active');
    
    // Close all other accordions
    accordionSteps.forEach(s => {
        s.classList.remove('active');
        s.querySelector('.step-header').setAttribute('aria-expanded', 'false');
    });
    
    // Open clicked accordion if it wasn't active
    if (!isActive) {
        step.classList.add('active');
        step.querySelector('.step-header').setAttribute('aria-expanded', 'true');
    }
}
*/
