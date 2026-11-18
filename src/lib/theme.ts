export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Runs in <head> before the page is drawn, so a saved dark theme doesn't flash light first.
export const themeScript = `
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
`;
