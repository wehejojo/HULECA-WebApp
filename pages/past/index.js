window.onload = () => {

  let numLogs = 0;
  let body = document.querySelector("body");

  fetch("http://192.168.100.6:3001/numLog")
    .then(res => res.json())
    .then(data => numLogs = data.numLogs)
    .catch(e => console.log(`Error fetching logs: ${e}`));

  if (numLogs <= 1) {
    let element = document.createElement("div");

    element.classList.add("main-text");
    element.innerHTML = `
      <h1>
        No Past Violations...
      </h1>
    `;

    body.append(element);
  } else {
    const logs = fetch("http://192.168.100.6:3001/logs")
      .then(res => res.json())
      .catch(e => console.log(`Error fetching logs: ${e}`));

    let component = document.createElement("div");

    component.classList.add("log-container");
    component.append(
      document.createElement("div")
        .classList.add()
    );
  }

};