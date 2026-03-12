(function () {
  "use strict";

  // Cache DOM elements
  const ud_header = document.querySelector(".ud-header");
  const logo = document.querySelector(".header-logo");
  const backToTop = document.querySelector(".back-to-top");

  let ticking = false;
  let lastScrollY = 0;

  // ======= Optimized Sticky Header with RAF
  function updateHeader() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Sticky header
    if (scrollY > 0) {
      ud_header.classList.add("sticky");
      logo.src = "assets/images/logo/ts-logo-black-small.svg";
    } else {
      ud_header.classList.remove("sticky");
      logo.src = "assets/images/logo/ts-logo-blue-small.svg";
    }

    // Back to top button
    if (scrollY > 50) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    lastScrollY = window.pageYOffset;

    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // ===== Responsive navbar
  const navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", () => {
      navbarToggler.classList.toggle("navbarTogglerActive");
      navbarCollapse.classList.toggle("hidden");
    });
  }

  //===== Close navbar-collapse when a link is clicked
  const navbarLinks = document.querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarToggler && navbarCollapse) {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      }
    });
  });

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
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

  // ===== FAQ accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((faq) => {
    const btn = faq.querySelector(".faq-btn");
    const icon = faq.querySelector(".icon");
    const content = faq.querySelector(".faq-content");

    if (btn && icon && content) {
      btn.addEventListener("click", () => {
        icon.classList.toggle("rotate-180");
        content.classList.toggle("hidden");
      });
    }
  });

  // ===== WOW.js initialization
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // ====== Smooth scroll to top
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      scrollTo(document.documentElement);
    });
  }
})();
