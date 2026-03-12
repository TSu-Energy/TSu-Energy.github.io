/**
 * Performance Optimization Utility
 * Handles various performance optimizations
 */
(function () {
  "use strict";

  /**
   * Debounce function
   */
  function debounce(func, wait = 300) {
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
   * Throttle function
   */
  function throttle(func, limit = 300) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Preload critical resources
   */
  function preloadResources() {
    const criticalImages = [
      'assets/images/logo/ts-logo-black-small.svg',
      'assets/images/logo/ts-logo-blue-small.svg'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize external scripts loading
   */
  function optimizeScriptLoading() {
    const scripts = document.querySelectorAll('script[data-defer]');

    scripts.forEach((script) => {
      script.defer = true;
    });
  }

  /**
   * Add loading state to page
   */
  function addPageLoadingState() {
    document.body.classList.add('page-loading');

    window.addEventListener('load', () => {
      document.body.classList.remove('page-loading');
      document.body.classList.add('page-loaded');
    });
  }

  /**
   * Monitor performance metrics
   */
  function monitorPerformance() {
    if ('PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Browser doesn't support this metric
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Browser doesn't support this metric
      }
    }
  }

  /**
   * Initialize performance optimizations
   */
  function init() {
    preloadResources();
    optimizeScriptLoading();
    addPageLoadingState();

    // Only monitor performance in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      monitorPerformance();
    }
  }

  // Initialize immediately
  init();

  // Expose utilities
  window.PerformanceUtils = {
    debounce,
    throttle
  };
})();
