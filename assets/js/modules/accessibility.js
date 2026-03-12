/**
 * Accessibility Utility
 * Enhances website accessibility features
 */
(function () {
  "use strict";

  /**
   * Add skip to main content link
   */
  function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Enhance keyboard navigation
   */
  function enhanceKeyboardNavigation() {
    // Add visible focus indicators
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Trap focus in modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        modal.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }

          if (e.key === 'Escape') {
            modal.dispatchEvent(new CustomEvent('closeModal'));
          }
        });
      }
    });
  }

  /**
   * Add ARIA labels to interactive elements
   */
  function enhanceAriaLabels() {
    // Add aria-label to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.textContent.trim() && !button.getAttribute('aria-label')) {
        const title = button.getAttribute('title');
        if (title) {
          button.setAttribute('aria-label', title);
        }
      }
    });

    // Add aria-current to active navigation links
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /**
   * Announce dynamic content changes to screen readers
   */
  function createLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  /**
   * Announce message to screen readers
   */
  function announce(message, priority = 'polite') {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;

      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Ensure proper heading hierarchy
   */
  function validateHeadingHierarchy() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1));

      if (previousLevel > 0 && level > previousLevel + 1) {
        console.warn(
          `Heading hierarchy issue: ${heading.tagName} follows h${previousLevel}`,
          heading
        );
      }

      previousLevel = level;
    });
  }

  /**
   * Add reduced motion support
   */
  function handleReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function updateMotionPreference() {
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion');
        // Disable WOW.js animations
        if (window.WOW) {
          const wowElements = document.querySelectorAll('.wow');
          wowElements.forEach((el) => {
            el.classList.remove('wow');
            el.style.visibility = 'visible';
            el.style.animationName = 'none';
          });
        }
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    }

    updateMotionPreference();
    prefersReducedMotion.addEventListener('change', updateMotionPreference);
  }

  /**
   * Initialize accessibility features
   */
  function init() {
    addSkipLink();
    enhanceKeyboardNavigation();
    enhanceAriaLabels();
    createLiveRegion();
    handleReducedMotion();

    // Validate heading hierarchy in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      validateHeadingHierarchy();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API
  window.A11y = {
    announce
  };
})();
