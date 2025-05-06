window.onload = async () => {
  // window.alert("New Violation Detected!!");

  const body = document.querySelector("body");
  const main = document.querySelector("main");

  try {
    const res = await fetch("http://192.168.100.6:3001/numLog");
    const data = await res.json();
    const numLogs = data.numLogs;

    if (numLogs < 1) {
      const element = document.createElement("div");
      element.classList.add("main-text");
      element.innerHTML = `<h1>No Past Violations...</h1>`;
      body.appendChild(element);
    } else {
      const logsRes = await fetch("http://192.168.100.6:3001/logs");
      const logs = await logsRes.json();

      const title = document.createElement('h2');
      title.innerHTML = "Past Violations";
      title.classList.add("section-title");

      main.append(title);

      logs.forEach(log => {
        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = `
          <div class="header""><p>Violation Details</p></div>
          <div class="main">
            <div class="content-container">
              <div>VIOLATION #${log.logID}</div>
              <div>Date: ${log.logTime}</div>
            </div>
          </div>
        `;

        container.addEventListener('click', () => {
          window.location.href = `../render/index.html?logID=${encodeURIComponent(log.logID)}`;
        });

        main.appendChild(container);
      });
      const backButton = document.createElement("button");
      backButton.innerHTML = "Back";

      backButton.onclick = () => {
        window.location.href = "../../index.html";
      };

      body.append(backButton);
    }
  } catch (err) {
    console.error("Error loading logs:", err);
  }
};