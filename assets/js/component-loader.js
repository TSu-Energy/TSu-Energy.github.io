/**
 * Component Loader Utility
 * Dynamically loads HTML components (navbar, footer, etc.)
 */
(function () {
  "use strict";

  /**
   * Load HTML component into element
   */
  async function loadComponent(elementId, componentPath) {
    const element = document.getElementById(elementId);

    if (!element) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    try {
      const response = await fetch(componentPath);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const html = await response.text();
      element.innerHTML = html;

      // Trigger custom event after component is loaded
      element.dispatchEvent(new CustomEvent('componentLoaded', {
        detail: { componentPath }
      }));

      // Re-initialize scripts for the loaded component
      initializeComponentScripts(element);
    } catch (error) {
      console.error(`Failed to load component from ${componentPath}:`, error);
    }
  }

  /**
   * Initialize scripts for dynamically loaded components
   */
  function initializeComponentScripts(container) {
    // Re-attach navbar toggler if it exists
    const navbarToggler = container.querySelector("#navbarToggler");
    const navbarCollapse = container.querySelector("#navbarCollapse");

    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener("click", () => {
        navbarToggler.classList.toggle("navbarTogglerActive");
        navbarCollapse.classList.toggle("hidden");
      });
    }

    // Re-attach submenu handlers
    const submenuItems = container.querySelectorAll(".submenu-item");
    submenuItems.forEach((item) => {
      const link = item.querySelector("a");
      const submenu = item.querySelector(".submenu");

      if (link && submenu) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          submenu.classList.toggle("hidden");
        });
      }
    });
  }

  /**
   * Load all components marked with data-component attribute
   */
  function loadAllComponents() {
    const components = document.querySelectorAll('[data-component]');

    components.forEach((element) => {
      const componentPath = element.getAttribute('data-component');
      const componentId = element.id;

      if (componentPath && componentId) {
        loadComponent(componentId, componentPath);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
  } else {
    loadAllComponents();
  }

  // Expose API
  window.ComponentLoader = {
    loadComponent
  };
})();
