window.onload = async () => {
  try{
    const logsRes = await fetch("http://localhost:3001/logs");
    const logs = await logsRes.json();
  
    const buttons = [
      { id: "latest", url: `./pages/latest/index.html?logID=${encodeURIComponent(logs[logs.length-1].logID)}` },
      { id: "past", url: "./pages/past/past.html" },
      { id: "reports", url: "./pages/reports/reports.html" }
    ];
    
    buttons.forEach((button, index) => {
      if(index === 0){
        document.getElementById(button.id).addEventListener("click", () => {
          window.location.href = button.url;
        });
      } else {
        document.getElementById(button.id).addEventListener("click", () => {
          window.location.href = button.url;
        });
      }
    });
  } catch (err) {
    console.error("Error loading logs:", err);
  }
};