/**
 * WhatsApp Chat Widget
 * Floating button with popup chat interface
 */

class WhatsAppWidget {
  constructor() {
    this.widget = document.querySelector('.whatsapp-widget');
    this.toggleBtn = document.querySelector('.whatsapp-btn');
    this.popup = document.querySelector('.whatsapp-popup');
    this.chatBtn = document.querySelector('.whatsapp-chat-btn');
    this.tooltip = document.querySelector('.whatsapp-tooltip');
    this.phoneNumber = '918447753524'; // Indian number without + or spaces
    this.defaultMessage = 'Hello! I would like to know more about I.T.S Institute of Health & Allied Sciences programs.';
    this.isOpen = false;
    this.init();
  }

  init() {
    if (!this.widget) return;

    // Toggle popup
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Start chat button
    if (this.chatBtn) {
      this.chatBtn.addEventListener('click', () => this.startChat());
    }

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.widget.contains(e.target)) {
        this.close();
      }
    });

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
    if (this.popup) {
      this.popup.classList.add('active');
      this.isOpen = true;
      // Hide tooltip when popup is open
      if (this.tooltip) {
        this.tooltip.style.display = 'none';
      }
    }
  }

  close() {
    if (this.popup) {
      this.popup.classList.remove('active');
      this.isOpen = false;
      // Show tooltip again when popup is closed
      if (this.tooltip) {
        this.tooltip.style.display = 'block';
      }
    }
  }

  startChat() {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    this.close();
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new WhatsAppWidget();
});
