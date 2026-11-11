
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");

  menuToggle.textContent =
    nav.classList.contains("active") ? "×" : "☰";
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// LANGUAGE SWITCHER
let currentLanguage = "id";

const languageToggle =
  document.getElementById("languageToggle");

languageToggle.addEventListener("click", function () {
  currentLanguage =
    currentLanguage === "id" ? "en" : "id";

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-id]").forEach(function (element) {
    const translation =
      element.getAttribute("data-" + currentLanguage);

    if (translation) {
      element.textContent = translation;
    }
  });

  languageToggle.textContent =
    currentLanguage === "id" ? "EN" : "ID";
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();
