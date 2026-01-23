const langButtons = {
    tr: document.getElementById("lang-tr"),
    en: document.getElementById("lang-en")
};

function setLanguage(lang) {
    document.querySelectorAll("[data-tr]").forEach(el => {
        el.textContent = el.dataset[lang];
    });

    localStorage.setItem("language", lang);
}

langButtons.tr.addEventListener("click", () => setLanguage("tr"));
langButtons.en.addEventListener("click", () => setLanguage("en"));

/* Load saved language */
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);
