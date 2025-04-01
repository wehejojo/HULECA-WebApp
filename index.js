const buttons = [
  { id: "detect", url: "./pages/detect/detect.html" },
  { id: "past", url: "./pages/past/past.html" },
  { id: "reports", url: "./pages/reports/reports.html" }
];

buttons.forEach(button => {
  document.getElementById(button.id).addEventListener("click", () => {
      window.location.href = button.url;
  });
});