/**
 * Hero Slider Component
 * Auto-rotating carousel with navigation
 */

class HeroSlider {
  constructor() {
    this.slides = document.querySelectorAll('.hero-slide');
    this.dots = document.querySelectorAll('.hero-dot');
    this.prevBtn = document.querySelector('.hero-nav-btn.prev');
    this.nextBtn = document.querySelector('.hero-nav-btn.next');
    this.currentSlide = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 seconds
    this.init();
  }

  init() {
    if (this.slides.length === 0) return;

    // Show first slide
    this.goToSlide(0);

    // Bind navigation buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prevSlide();
        this.resetAutoPlay();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.nextSlide();
        this.resetAutoPlay();
      });
    }

    // Bind dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goToSlide(index);
        this.resetAutoPlay();
      });
    });

    // Start auto-play
    this.startAutoPlay();

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', () => this.stopAutoPlay());
      heroSection.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    // Handle visibility change (pause when tab is not visible)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopAutoPlay();
      } else {
        this.startAutoPlay();
      }
    });
  }

  goToSlide(index) {
    // Remove active class from all slides and dots
    this.slides.forEach((slide) => slide.classList.remove('active'));
    this.dots.forEach((dot) => dot.classList.remove('active'));

    // Add active class to current slide and dot
    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');

    this.currentSlide = index;
  }

  nextSlide() {
    const next = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(next);
  }

  prevSlide() {
    const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prev);
  }

  startAutoPlay() {
    if (this.autoPlayInterval) return;
    this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new HeroSlider();
});
