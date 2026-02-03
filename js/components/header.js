/**
 * Header Component
 * Handles mega menu, mobile menu, and search functionality
 */

class MegaMenu {
  constructor() {
    this.navItems = document.querySelectorAll('.nav-item[data-menu]');
    this.megaPanels = document.querySelectorAll('.mega-menu-panel');
    this.megaContainer = document.querySelector('.mega-menu-container');
    this.timeoutId = null;
    this.init();
  }

  init() {
    // Nav item hover events
    this.navItems.forEach((item) => {
      item.addEventListener('mouseenter', () => this.openMenu(item));
      item.addEventListener('mouseleave', () => this.scheduleClose());
    });

    // Mega menu container hover events
    if (this.megaContainer) {
      this.megaContainer.addEventListener('mouseenter', () => this.cancelClose());
      this.megaContainer.addEventListener('mouseleave', () => this.closeMenu());
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    });
  }

  openMenu(item) {
    this.cancelClose();
    const menuId = item.dataset.menu;

    // Hide all panels first
    this.megaPanels.forEach((panel) => {
      panel.style.display = 'none';
    });

    // Show the target panel
    const targetPanel = document.querySelector(`[data-panel="${menuId}"]`);
    if (targetPanel && this.megaContainer) {
      targetPanel.style.display = 'block';
      this.megaContainer.classList.add('active');
    }
  }

  scheduleClose() {
    this.timeoutId = setTimeout(() => this.closeMenu(), 150);
  }

  cancelClose() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  closeMenu() {
    if (this.megaContainer) {
      this.megaContainer.classList.remove('active');
    }
    this.megaPanels.forEach((panel) => {
      panel.style.display = 'none';
    });
  }
}

class MobileMenu {
  constructor() {
    this.menuBtn = document.querySelector('.mobile-menu-btn');
    this.closeBtn = document.querySelector('.mobile-menu-close');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.menuContent = document.querySelector('.mobile-menu-content');
    this.init();
  }

  init() {
    if (this.menuBtn) {
      this.menuBtn.addEventListener('click', () => this.openMenu());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeMenu());
    }

    // Close when clicking outside
    if (this.mobileMenu) {
      this.mobileMenu.addEventListener('click', (e) => {
        if (e.target === this.mobileMenu) {
          this.closeMenu();
        }
      });
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeMenu() {
    if (this.mobileMenu) {
      this.mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

class SearchToggle {
  constructor() {
    this.searchBtn = document.querySelector('.search-toggle-btn');
    this.searchInput = document.querySelector('.search-input-container');
    this.input = document.querySelector('.search-input');
    this.isOpen = false;
    this.init();
  }

  init() {
    if (this.searchBtn) {
      this.searchBtn.addEventListener('click', () => this.toggle());
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.searchInput) {
      this.searchInput.style.display = 'block';
      if (this.input) {
        this.input.focus();
      }
      this.isOpen = true;
    }
  }

  close() {
    if (this.searchInput) {
      this.searchInput.style.display = 'none';
      this.isOpen = false;
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new MegaMenu();
  new MobileMenu();
  new SearchToggle();
});
