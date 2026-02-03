/**
 * Main JavaScript Entry Point
 * I.T.S Institute of Health & Allied Sciences
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('I.T.S IHAS Website Initialized');

  // Smooth scroll for anchor links
  initSmoothScroll();

  // Lazy load images
  initLazyLoading();

  // Form handling
  initForms();
});

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

/**
 * Form handling
 */
function initForms() {
  const enquiryForm = document.querySelector('.enquiry-form');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.name || !data.phone || !data.email) {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Phone validation (Indian format)
      const phoneRegex = /^[6-9]\d{9}$/;
      const cleanPhone = data.phone.replace(/\D/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }

      // Success message (in production, this would submit to a server)
      alert('Thank you for your enquiry! We will contact you soon.');
      this.reset();
    });
  }
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
