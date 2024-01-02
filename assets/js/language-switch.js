const defaultLanguage = "en";
let currentLanguage = defaultLanguage;

function translatePage() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");
    const translation = translations[key][currentLanguage];
    element.innerHTML = translation;
  });
}

function switchLanguage(language) {
  currentLanguage = language;
  translatePage();
}

// 默认加载英文
document.addEventListener("DOMContentLoaded", function () {
  translatePage();
});
