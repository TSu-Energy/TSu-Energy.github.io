/**
 * Form Validation Utility
 * Handles form validation and submission
 */
(function () {
  "use strict";

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone validation regex (international format)
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;

  /**
   * Validate email format
   */
  function validateEmail(email) {
    return emailRegex.test(email);
  }

  /**
   * Validate phone format
   */
  function validatePhone(phone) {
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }

  /**
   * Show error message
   */
  function showError(input, message) {
    const parent = input.parentElement;
    let errorElement = parent.querySelector('.error-message');

    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'error-message text-xs text-red-500 mt-1 block';
      parent.appendChild(errorElement);
    }

    errorElement.textContent = message;
    input.classList.add('border-red-500');
  }

  /**
   * Clear error message
   */
  function clearError(input) {
    const parent = input.parentElement;
    const errorElement = parent.querySelector('.error-message');

    if (errorElement) {
      errorElement.remove();
    }

    input.classList.remove('border-red-500');
  }

  /**
   * Validate form field
   */
  function validateField(input) {
    const value = input.value.trim();
    const name = input.name;

    clearError(input);

    if (!value) {
      showError(input, 'This field is required');
      return false;
    }

    if (name === 'email' && !validateEmail(value)) {
      showError(input, 'Please enter a valid email address');
      return false;
    }

    if (name === 'phone' && !validatePhone(value)) {
      showError(input, 'Please enter a valid phone number');
      return false;
    }

    return true;
  }

  /**
   * Initialize form validation
   */
  function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input[required], textarea[required]');

      // Real-time validation
      inputs.forEach((input) => {
        input.addEventListener('blur', () => {
          validateField(input);
        });

        input.addEventListener('input', () => {
          if (input.classList.contains('border-red-500')) {
            validateField(input);
          }
        });
      });

      // Form submission
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        inputs.forEach((input) => {
          if (!validateField(input)) {
            isValid = false;
          }
        });

        if (isValid) {
          // Form is valid, handle submission
          console.log('Form is valid, ready to submit');
          // Add your form submission logic here
          // e.g., fetch API call, email service, etc.
        } else {
          // Focus on first error
          const firstError = form.querySelector('.border-red-500');
          if (firstError) {
            firstError.focus();
          }
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormValidation);
  } else {
    initFormValidation();
  }
})();
