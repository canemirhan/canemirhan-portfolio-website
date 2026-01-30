const langButtons = {
    tr: document.getElementById("lang-tr"),
    en: document.getElementById("lang-en")
};

function setLanguage(lang) {
    document.querySelectorAll("[data-tr]").forEach(el => {
        el.textContent = el.dataset[lang];
    });

    // Update form button text
    const submitBtn = document.querySelector(".contact-form button");
    if (submitBtn) {
        submitBtn.textContent = submitBtn.dataset[lang] || "Send Message";
    }

    // Update form input placeholders
    document.querySelectorAll("[data-placeholder-en]").forEach(el => {
        el.placeholder = el.dataset[`placeholder-${lang}`];
    });

    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem("language", lang);
}

langButtons.tr.addEventListener("click", () => setLanguage("tr"));
langButtons.en.addEventListener("click", () => setLanguage("en"));

/* Load saved language - data-lang attribute already set in head, just apply content */
const savedLang = document.documentElement.getAttribute("data-lang") || "en";
setLanguage(savedLang);
