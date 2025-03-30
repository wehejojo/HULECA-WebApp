const buttons = [
  { id: "detect", url: "./pages/detect.html" },
  { id: "past", url: "./pages/past.html" },
  { id: "reports", url: "./pages/reports.html" }
];

buttons.forEach(button => {
  document.getElementById(button.id).addEventListener("click", () => {
      window.location.href = button.url;
  });
});