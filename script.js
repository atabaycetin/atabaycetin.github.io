const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function isDarkTheme() {
  const explicitTheme = root.dataset.theme;
  return explicitTheme ? explicitTheme === "dark" : prefersDark.matches;
}

function updateThemeControl() {
  const darkThemeActive = isDarkTheme();
  themeToggle.setAttribute(
    "aria-label",
    darkThemeActive ? "Switch to light theme" : "Switch to dark theme"
  );
  themeColor.setAttribute("content", darkThemeActive ? "#111512" : "#f4f4ef");
}

themeToggle.addEventListener("click", () => {
  root.dataset.theme = isDarkTheme() ? "light" : "dark";
  updateThemeControl();
});

prefersDark.addEventListener("change", () => {
  if (!root.dataset.theme) updateThemeControl();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
updateThemeControl();
