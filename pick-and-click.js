export function pick() {
  //setup: create the hsl div
  let hslDiv = document.createElement("div");
  hslDiv.setAttribute("class", "text");
  hslDiv.classList.add("hsl");
  document.body.appendChild(hslDiv);

  //setup: create the svg lines
  let s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  s.setAttributeNS(null, "height", window.innerHeight);
  s.setAttributeNS(null, "width", window.innerWidth);

  let xLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xLine.setAttributeNS(null, "id", "x");
  xLine.setAttributeNS(null, "x1", 0);
  xLine.setAttributeNS(null, "x2", 0);
  xLine.setAttributeNS(null, "y1", 0);
  xLine.setAttributeNS(null, "y2", 0);
  xLine.style.stroke = "white";
  xLine.style.strokeWidth = 1;

  let yLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yLine.setAttributeNS(null, "id", "y");
  yLine.setAttributeNS(null, "x1", 0);
  yLine.setAttributeNS(null, "x2", 0);
  yLine.setAttributeNS(null, "y1", 0);
  yLine.setAttributeNS(null, "y2", 0);
  yLine.style.stroke = "white";
  yLine.style.strokeWidth = 1;

  s.appendChild(xLine);
  s.appendChild(yLine);

  document.body.appendChild(s);

  //do this as mouse moves
  document.addEventListener("mousemove", e => {
    //remove what you had before
    document.querySelectorAll(".hslDiv").forEach(e => e.remove());
    document.querySelectorAll(".hueDiv").forEach(e => e.remove());
    document.querySelectorAll(".lumDiv").forEach(e => e.remove());

    //set x,y
    let xLine = document.getElementById("x");
    xLine.setAttributeNS(null, "x1", 0);
    xLine.setAttributeNS(null, "x2", window.innerWidth);
    xLine.setAttributeNS(null, "y1", e.clientY);
    xLine.setAttributeNS(null, "y2", e.clientY);

    let yLine = document.getElementById("y");
    yLine.setAttributeNS(null, "x1", e.clientX);
    yLine.setAttributeNS(null, "x2", e.clientX);
    yLine.setAttributeNS(null, "y1", 0);
    yLine.setAttributeNS(null, "y2", window.innerHeight);

    //set bg to mouse position
    let x = e.clientX / window.innerWidth * 360;
    let y = e.clientY / window.innerHeight * 100;
    document.body.style.background = `hsl(${x}, 50%, ${y}%)`;

    //create the hsl div
    let hslDiv = document.createElement("div");
    hslDiv.setAttribute("class", "text");
    hslDiv.textContent = `hsl(${Math.round(x)}, 50%, ${Math.round(y)}%)`;
    document.body.appendChild(hslDiv);

    //create hue div
    let hueDiv = document.createElement("div");
    hueDiv.setAttribute("class", "hue");
    hueDiv.classList.add("text");
    hueDiv.textContent = `hue
        ${Math.round(x)}`;
    document.body.appendChild(hueDiv);

    //create luminosity div
    let lumDiv = document.createElement("div");
    lumDiv.setAttribute('class', 'luminosity');
    lumDiv.classList.add("text");
    lumDiv.textContent = `${Math.round(y)}
    luminosity`;
    document.body.appendChild(lumDiv);
  })

  //do this on mouse click
  document.addEventListener("click", e => {
    if (e.target.classList.contains("hslDiv")) {
      let hslValue = e.target.textContent.trim(); // Get the HSL text from the clicked div
      
      // Copy to clipboard using modern Clipboard API
      navigator.clipboard.writeText(hslValue)
          .then(() => console.log("Copied: " + hslValue))
          .catch(err => console.error("Failed to copy: ", err));
  }
  })
}
