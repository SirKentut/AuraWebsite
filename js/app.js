const btn = document.querySelector(".theme-switch input");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", () => {
  if (prefersDarkScheme.matches) {
    document.documentElement.classList.toggle("light");
  } else {
    document.documentElement.classList.toggle("dark");
  }
});