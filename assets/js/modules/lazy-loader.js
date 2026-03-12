/**
 * Lazy Loading Utility
 * Optimizes image loading with Intersection Observer
 */
(function () {
  "use strict";

  /**
   * Lazy load images using Intersection Observer
   */
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');

            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      lazyImages.forEach((img) => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without Intersection Observer
      lazyImages.forEach((img) => {
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
      });
    }
  }

  /**
   * Add loading animation to images
   */
  function addImageLoadingEffect() {
    const images = document.querySelectorAll('img:not([data-src])');

    images.forEach((img) => {
      if (!img.complete) {
        img.classList.add('loading');

        img.addEventListener('load', function onLoad() {
          img.classList.remove('loading');
          img.classList.add('loaded');
          img.removeEventListener('load', onLoad);
        });

        img.addEventListener('error', function onError() {
          img.classList.remove('loading');
          img.classList.add('error');
          img.removeEventListener('error', onError);
        });
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyLoading();
      addImageLoadingEffect();
    });
  } else {
    initLazyLoading();
    addImageLoadingEffect();
  }
})();
