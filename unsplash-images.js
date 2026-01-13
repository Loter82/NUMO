/**
 * Unsplash API Integration for NUMO Energy Solutions
 * Using Unsplash Source API (no API key required)
 * https://source.unsplash.com/
 */

const UNSPLASH_IMAGES = {
    // Services Section - Energy Solutions Images
    services: {
        coordination: {
            url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
            alt: 'Project coordination and planning',
            query: 'business meeting teamwork'
        },
        technical: {
            url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            alt: 'Technical engineering solutions',
            query: 'solar panels engineering'
        },
        sourcing: {
            url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            alt: 'Supplier sourcing and logistics',
            query: 'logistics supply chain'
        },
        delivery: {
            url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
            alt: 'Delivery support and installation',
            query: 'delivery installation support'
        }
    },

    // Markets Section - Geographic/Industry Images
    markets: {
        industrial: {
            url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
            alt: 'European industrial and energy infrastructure',
            query: 'european buildings industry'
        },
        commercial: {
            url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
            alt: 'Commercial buildings',
            query: 'office building commercial'
        },
        renewable: {
            url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
            alt: 'Renewable energy projects',
            query: 'solar farm renewable'
        },
        infrastructure: {
            url: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
            alt: 'Infrastructure and construction',
            query: 'construction infrastructure'
        }
    },

    // Use Cases / Projects - Specific Applications
    projects: {
        datacenter: {
            url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
            alt: 'Data center power backup',
            query: 'data center servers'
        },
        hospital: {
            url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80',
            alt: 'Hospital critical power',
            query: 'hospital medical facility'
        },
        solar: {
            url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&q=80',
            alt: 'Solar energy installation',
            query: 'solar panels installation'
        },
        construction: {
            url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80',
            alt: 'Construction site power',
            query: 'construction site equipment'
        }
    },

    // About Section - Team/Coordination
    about: {
        coordination: {
            url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
            alt: 'Team coordination and collaboration',
            query: 'team meeting collaboration'
        },
        network: {
            url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
            alt: 'Global network connections',
            query: 'network technology global'
        }
    },

    // Process Section - Step by Step
    process: {
        analysis: {
            url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
            alt: 'Requirements analysis',
            query: 'data analysis planning'
        },
        design: {
            url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
            alt: 'Solution design',
            query: 'engineering design blueprint'
        },
        coordination: {
            url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
            alt: 'Supplier coordination',
            query: 'logistics coordination'
        },
        delivery: {
            url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
            alt: 'Delivery and installation',
            query: 'delivery truck installation'
        }
    },

    // Partners Section - Network Partners
    partners: {
        manufacturers: {
            url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=650&q=80',
            alt: 'Manufacturing facility with generators and equipment',
            query: 'factory manufacturing power equipment'
        },
        distributors: {
            url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=650&q=80',
            alt: 'Distribution warehouse and logistics',
            query: 'warehouse distribution logistics'
        },
        contractors: {
            url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=650&q=80',
            alt: 'Construction workers and contractors',
            query: 'construction workers installation'
        },
        logistics: {
            url: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=650&q=80',
            alt: 'Freight and transportation',
            query: 'cargo truck logistics delivery'
        },
        representatives: {
            url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=650&q=80',
            alt: 'Local business representatives',
            query: 'business handshake partnership'
        }
    }
};

/**
 * Apply background images to service cards
 */
function applyServiceImages() {
    const serviceCards = document.querySelectorAll('.service-card');
    const images = [
        UNSPLASH_IMAGES.services.coordination,
        UNSPLASH_IMAGES.services.technical,
        UNSPLASH_IMAGES.services.sourcing,
        UNSPLASH_IMAGES.services.delivery
    ];

    serviceCards.forEach((card, index) => {
        if (images[index]) {
            // Create image overlay container
            const imageOverlay = document.createElement('div');
            imageOverlay.className = 'card-image-overlay';
            imageOverlay.style.backgroundImage = `url('${images[index].url}')`;
            
            // Insert at the beginning of card
            card.insertBefore(imageOverlay, card.firstChild);
            card.classList.add('has-image');
        }
    });
}

/**
 * Apply background images to market cards
 */
function applyMarketImages() {
    const marketCards = document.querySelectorAll('.market-card');
    const images = [
        UNSPLASH_IMAGES.markets.industrial,
        UNSPLASH_IMAGES.markets.commercial,
        UNSPLASH_IMAGES.markets.renewable,
        UNSPLASH_IMAGES.markets.infrastructure
    ];

    marketCards.forEach((card, index) => {
        if (images[index]) {
            const imageOverlay = document.createElement('div');
            imageOverlay.className = 'card-image-overlay';
            imageOverlay.style.backgroundImage = `url('${images[index].url}')`;
            
            card.insertBefore(imageOverlay, card.firstChild);
            card.classList.add('has-image');
        }
    });
}

/**
 * Apply background images to use-case cards
 */
function applyProjectImages() {
    const useCaseCards = document.querySelectorAll('.use-case-card');
    const images = [
        UNSPLASH_IMAGES.projects.datacenter,
        UNSPLASH_IMAGES.projects.hospital,
        UNSPLASH_IMAGES.projects.solar,
        UNSPLASH_IMAGES.projects.construction
    ];

    useCaseCards.forEach((card, index) => {
        if (images[index]) {
            const imageOverlay = document.createElement('div');
            imageOverlay.className = 'card-image-overlay';
            imageOverlay.style.backgroundImage = `url('${images[index].url}')`;
            
            card.insertBefore(imageOverlay, card.firstChild);
            card.classList.add('has-image');
        }
    });
}

/**
 * Apply background images to partner cards
 */
function applyPartnerImages() {
    const partnerCards = document.querySelectorAll('.partner-card');
    const images = [
        UNSPLASH_IMAGES.partners.manufacturers,
        UNSPLASH_IMAGES.partners.distributors,
        UNSPLASH_IMAGES.partners.contractors,
        UNSPLASH_IMAGES.partners.logistics,
        UNSPLASH_IMAGES.partners.representatives
    ];

    partnerCards.forEach((card, index) => {
        if (images[index]) {
            const imageOverlay = document.createElement('div');
            imageOverlay.className = 'card-image-overlay';
            imageOverlay.style.backgroundImage = `url('${images[index].url}')`;
            
            card.insertBefore(imageOverlay, card.firstChild);
            card.classList.add('has-image');
        }
    });
}

/**
 * Add decorative image to About section
 */
function applyAboutImage() {
    const aboutSection = document.querySelector('.about .container');
    if (aboutSection) {
        const aboutImage = document.createElement('div');
        aboutImage.className = 'about-decorative-image';
        aboutImage.style.backgroundImage = `url('${UNSPLASH_IMAGES.about.coordination.url}')`;
        
        // Insert after section header
        const sectionHeader = aboutSection.querySelector('.section-header');
        if (sectionHeader) {
            sectionHeader.after(aboutImage);
        }
    }
}

/**
 * Initialize all images on page load
 */
function initializeUnsplashImages() {
    // Wait for DOM and AOS to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyImages);
    } else {
        applyImages();
    }
}

function applyImages() {
    applyServiceImages();
    applyMarketImages();
    applyProjectImages();
    applyPartnerImages();
    // applyAboutImage(); // Optional - uncomment if you want decorative image in About
}

// Auto-initialize
initializeUnsplashImages();
