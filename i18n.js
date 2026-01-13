// ===========================
// Universal Language Switcher for NUMO Website
// Translates ALL elements with data-i18n attributes
// ===========================

// Default language
let currentLanguage = localStorage.getItem('numo_language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupLanguageSwitcher();
    setupDropdownToggle();
});

// Initialize language
function initializeLanguage() {
    // Set HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update language button
    updateLanguageButton();
    
    // Translate all elements
    translatePage();
}

// Setup language switcher
function setupLanguageSwitcher() {
    const langOptions = document.querySelectorAll('[data-lang]');
    
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = option.dataset.lang;
            changeLanguage(newLang);
        });
    });
}

// Setup dropdown toggle
function setupDropdownToggle() {
    const langButton = document.getElementById('langButton');
    const langDropdown = document.getElementById('langDropdown');
    
    if (langButton && langDropdown) {
        langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });
    }
}

// Change language
function changeLanguage(lang) {
    if (lang === currentLanguage) return;
    
    currentLanguage = lang;
    
    // Save to localStorage
    localStorage.setItem('numo_language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language button
    updateLanguageButton();
    
    // Translate page with animation
    document.body.style.opacity = '0.7';
    
    setTimeout(() => {
        translatePage();
        document.body.style.opacity = '1';
    }, 150);
    
    // Close dropdown
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

// Update language button text
function updateLanguageButton() {
    const currentLangText = document.getElementById('currentLangText');
    if (currentLangText) {
        currentLangText.textContent = currentLanguage.toUpperCase();
    } else {
        // Fallback for older structure
        const langButton = document.getElementById('langButton');
        if (langButton && langButton.childNodes[0]) {
            const langText = langButton.childNodes[0];
            if (langText.nodeType === Node.TEXT_NODE) {
                langText.textContent = currentLanguage.toUpperCase() + ' ';
            }
        }
    }
}

// Translate entire page - UNIVERSAL APPROACH
function translatePage() {
    const t = translations[currentLanguage];
    if (!t) {
        console.error(`Translation not found for language: ${currentLanguage}`);
        return;
    }
    
    // Find ALL elements with data-i18n attribute
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t[key];
        
        if (translation) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // For form inputs, update placeholder
                if (element.type !== 'submit' && element.type !== 'button') {
                    element.placeholder = translation;
                }
            }
            
            if (element.tagName === 'OPTION') {
                // For select options, update text
                element.textContent = translation;
            }
            
            // For all elements (including buttons, labels, spans, etc), update textContent
            // but preserve child elements like SVG icons
            if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                // For buttons and links, only replace text nodes
                updateTextContent(element, translation);
            } else {
                // For other elements, just set textContent
                element.textContent = translation;
            }
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
        }
    });
}

// Helper function to update text content while preserving child elements
function updateTextContent(element, text) {
    // Find and update text nodes, preserve other nodes (like SVG)
    const childNodes = Array.from(element.childNodes);
    let textNodeFound = false;
    
    childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = text;
            textNodeFound = true;
        } else if (node.nodeType === Node.ELEMENT_NODE && node.hasAttribute('data-i18n')) {
            // Skip child elements with their own data-i18n
            return;
        }
    });
    
    // If no text node was found, add one at the beginning
    if (!textNodeFound) {
        element.insertBefore(document.createTextNode(text + ' '), element.firstChild);
    }
}

// Update form notification with current language
function showNotification(key, type = 'success') {
    const t = translations[currentLanguage];
    const message = t[key] || key;
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Export for use in other scripts
window.numolang = {
    currentLanguage: () => currentLanguage,
    changeLanguage: changeLanguage,
    showNotification: showNotification,
    translate: (key) => {
        const t = translations[currentLanguage];
        return t[key] || key;
    }
};
