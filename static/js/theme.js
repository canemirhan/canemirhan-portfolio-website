const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Update icon on load
const currentTheme = html.getAttribute("data-theme");
toggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

toggle.addEventListener("click", () => {
    const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
