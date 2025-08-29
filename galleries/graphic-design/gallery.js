// Gallery Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery JavaScript loaded');
    initializeGalleryTabs();
    initializeLightbox();
    initializeImageClicks();
    console.log('Gallery initialization complete');
});

// Make openLightbox globally available for testing
window.openLightbox = openLightbox;
window.testLightbox = function() {
    console.log('Test function called');
    openLightbox('../../images/graphic-design/social-media/12.png', 'Test Image');
};

// Initialize direct image clicks
function initializeImageClicks() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const imageSrc = this.src;
            const imageAlt = this.alt;
            console.log('Image clicked:', imageSrc, imageAlt);
            openLightbox(imageSrc, imageAlt);
        });
        
        // Make cursor pointer to indicate clickable
        img.style.cursor = 'pointer';
    });
}

// Category tab functionality
function initializeGalleryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetCategory = tab.getAttribute('data-category');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Filter gallery items
            filterGalleryItems(targetCategory);
        });
    });
}

// Filter gallery items by category
function filterGalleryItems(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            // Add fade-in animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        } else {
            item.style.display = 'none';
        }
    });
}

// Lightbox functionality
function initializeLightbox() {
    console.log('Initializing lightbox...');
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    console.log('Lightbox elements found:', { lightbox, closeBtn, lightboxImage });
    
    if (!lightbox || !closeBtn || !lightboxImage) {
        console.error('Missing lightbox elements');
        return;
    }
    
    // Close lightbox when clicking close button
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    // Add click-to-close on image
    lightboxImage.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent closing when clicking on image
    });
    
    console.log('Lightbox initialized successfully');
}

// Open lightbox with image
function openLightbox(imageSrc, imageTitle) {
    console.log('openLightbox called with:', imageSrc, imageTitle);
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (!lightbox || !lightboxImage || !lightboxCaption) {
        console.error('Lightbox elements not found:', { lightbox, lightboxImage, lightboxCaption });
        return;
    }
    
    // Show loading state
    lightboxImage.style.opacity = '0';
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = imageTitle;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Add fade-in animation
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.transition = 'opacity 0.3s ease';
        lightbox.style.opacity = '1';
    }, 10);
    
    // Fade in image when loaded
    lightboxImage.onload = function() {
        this.style.transition = 'opacity 0.3s ease';
        this.style.opacity = '1';
    };
    
    console.log('Lightbox opened successfully');
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 300);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
function preloadImages() {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.5s ease';
                this.style.opacity = '1';
            });
        }
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', preloadImages);

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery items for animations
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});
