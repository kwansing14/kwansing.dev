(function initTheme() {
  var theme = localStorage.getItem("theme") || "";
  console.log(theme);
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();
