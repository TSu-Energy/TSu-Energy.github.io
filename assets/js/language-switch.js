/**
 * Language Switcher Utility
 * Handles multi-language support with localStorage persistence
 */
(function () {
  "use strict";

  const STORAGE_KEY = 'tsu-energy-language';
  const DEFAULT_LANGUAGE = 'en';
  let currentLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
  let translations = {};

  /**
   * Load translation data
   */
  async function loadTranslations() {
    try {
      const enData = document.getElementById('en-language');
      const zhData = document.getElementById('zh-language');

      if (enData && zhData) {
        translations.en = JSON.parse(enData.textContent);
        translations.zh = JSON.parse(zhData.textContent);
      }
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  /**
   * Translate page elements
   */
  function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');

      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        const translation = translations[currentLanguage][key];

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
  }

  /**
   * Switch language
   */
  function switchLanguage(language) {
    if (language !== currentLanguage && (language === 'en' || language === 'zh')) {
      currentLanguage = language;
      localStorage.setItem(STORAGE_KEY, language);
      translatePage();

      // Trigger custom event for other scripts
      window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: currentLanguage }
      }));
    }
  }

  /**
   * Initialize language switcher
   */
  function init() {
    loadTranslations().then(() => {
      translatePage();

      // Setup language switcher buttons
      const languageSwitchers = document.querySelectorAll('[data-language]');
      languageSwitchers.forEach((switcher) => {
        switcher.addEventListener('click', (e) => {
          e.preventDefault();
          const language = switcher.getAttribute('data-language');
          switchLanguage(language);
        });

        // Highlight active language
        if (switcher.getAttribute('data-language') === currentLanguage) {
          switcher.classList.add('active');
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API
  window.LanguageSwitcher = {
    switchLanguage,
    getCurrentLanguage: () => currentLanguage
  };
})();

