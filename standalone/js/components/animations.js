/**
 * Scroll-triggered Animations
 * Uses Intersection Observer to animate elements when they enter viewport
 */

class ScrollAnimations {
  constructor() {
    this.animatedElements = document.querySelectorAll('[data-animate]');
    this.staggerElements = document.querySelectorAll('[data-animate-stagger]');
    this.init();
  }

  init() {
    // Observer for single elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all animated elements
    this.animatedElements.forEach((el) => observer.observe(el));

    // Handle staggered animations
    this.initStaggerAnimations();
  }

  initStaggerAnimations() {
    // Group elements by their parent container
    const staggerGroups = new Map();

    this.staggerElements.forEach((el) => {
      const parent = el.closest('[data-animate-group]') || el.parentElement;
      if (!staggerGroups.has(parent)) {
        staggerGroups.set(parent, []);
      }
      staggerGroups.get(parent).push(el);
    });

    // Create observer for stagger groups
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = staggerGroups.get(entry.target);
            if (children) {
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('animate-in');
                }, index * 80); // 80ms stagger delay
              });
            }
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe parent containers
    staggerGroups.forEach((_, parent) => {
      staggerObserver.observe(parent);
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});
