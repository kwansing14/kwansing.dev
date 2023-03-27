const theme = localStorage.getItem("theme") || "";
console.log("script theme--", theme);
if (theme === "dark") {
  // document.querySelector("html").classList.add("dark");
  window.document.documentElement.classList.add("dark");
}
