(function () {
  "use strict";

  var ud_header = document.querySelector(".ud-header");
  var backToTop = document.querySelector(".back-to-top");
  var ticking = false;

  // ======= Sticky Header with nav color switching
  function updateHeader() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 0) {
      ud_header.classList.add("sticky");
      // Switch nav links to dark text
      document.querySelectorAll(".nav-link").forEach(function(el) {
        el.classList.remove("text-white", "hover:text-white/70");
        el.classList.add("text-dark", "hover:text-primary");
      });
      // Logo text
      var logoText = document.querySelector(".logo-text");
      if (logoText) { logoText.classList.remove("text-white"); logoText.classList.add("text-dark"); }
      // Language switcher
      var la = document.querySelector(".lang-active");
      if (la) { la.classList.remove("text-white", "border-white"); la.classList.add("text-primary", "border-primary"); }
      var li = document.querySelector(".lang-inactive");
      if (li) { li.classList.remove("text-white/60"); li.classList.add("text-gray-400"); }
      var ld = document.querySelector(".lang-divider-border");
      if (ld) { ld.classList.remove("border-white/30"); ld.classList.add("border-gray-200"); }
      var ldText = document.querySelector(".lang-divider-text");
      if (ldText) { ldText.classList.remove("text-white/40"); ldText.classList.add("text-gray-300"); }
    } else {
      ud_header.classList.remove("sticky");
      document.querySelectorAll(".nav-link").forEach(function(el) {
        el.classList.remove("text-dark", "hover:text-primary");
        el.classList.add("text-white", "hover:text-white/70");
      });
      var logoText = document.querySelector(".logo-text");
      if (logoText) { logoText.classList.remove("text-dark"); logoText.classList.add("text-white"); }
      var la = document.querySelector(".lang-active");
      if (la) { la.classList.remove("text-primary", "border-primary"); la.classList.add("text-white", "border-white"); }
      var li = document.querySelector(".lang-inactive");
      if (li) { li.classList.remove("text-gray-400"); li.classList.add("text-white/60"); }
      var ld = document.querySelector(".lang-divider-border");
      if (ld) { ld.classList.remove("border-gray-200"); ld.classList.add("border-white/30"); }
      var ldText = document.querySelector(".lang-divider-text");
      if (ldText) { ldText.classList.remove("text-gray-300"); ldText.classList.add("text-white/40"); }
    }
    // Back to top button
    if (backToTop) {
      backToTop.style.display = scrollY > 50 ? "flex" : "none";
    }
    ticking = false;
  }

  window.addEventListener("scroll", function() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // ===== Mobile navbar toggle
  var navbarToggler = document.querySelector("#navbarToggler");
  var navbarCollapse = document.querySelector("#navbarCollapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function() {
      navbarToggler.classList.toggle("navbarTogglerActive");
      navbarCollapse.classList.toggle("hidden");
    });
  }

  // ===== Close mobile menu on anchor link click
  document.querySelectorAll("#navbarCollapse a[href^='#']").forEach(function(link) {
    link.addEventListener("click", function() {
      if (navbarToggler && navbarCollapse) {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      }
    });
  });

  // ===== Mobile dropdown toggles
  document.querySelectorAll(".mobile-dropdown-toggle").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var menu = btn.nextElementSibling;
      var icon = btn.querySelector("svg");
      if (menu) menu.classList.toggle("hidden");
      if (icon) icon.classList.toggle("rotate-180");
    });
  });

  // ===== FAQ accordion
  document.querySelectorAll(".single-faq").forEach(function(faq) {
    var btn = faq.querySelector(".faq-btn");
    var icon = faq.querySelector(".icon");
    var content = faq.querySelector(".faq-content");
    if (btn && icon && content) {
      btn.addEventListener("click", function() {
        icon.classList.toggle("rotate-180");
        content.classList.toggle("hidden");
      });
    }
  });

  // ===== WOW.js
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  // ===== Smooth scroll to top
  function scrollTo(element, to, duration) {
    to = to || 0;
    duration = duration || 500;
    var start = element.scrollTop;
    var change = to - start;
    var increment = 20;
    var currentTime = 0;
    var animateScroll = function() {
      currentTime += increment;
      var t = currentTime / (duration / 2);
      var val;
      if (t < 1) { val = (change / 2) * t * t + start; }
      else { t--; val = (-change / 2) * (t * (t - 2) - 1) + start; }
      element.scrollTop = val;
      if (currentTime < duration) setTimeout(animateScroll, increment);
    };
    animateScroll();
  }

  if (backToTop) {
    backToTop.addEventListener("click", function() {
      scrollTo(document.documentElement);
    });
  }
})();
