export function pick() {
  //setup: create the hsl div
  let hslDiv = document.createElement("div");
  hslDiv.classList.add("hsl");
  document.body.appendChild(hslDiv);

  //setup: create the svg lines
  let s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  s.setAttributeNS(null, "height", window.innerHeight);
  s.setAttributeNS(null, "width", window.innerWidth);

  let xLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xLine.setAttributeNS(null, "id", "axisX");
  xLine.setAttributeNS(null, "x1", 0);
  xLine.setAttributeNS(null, "x2", 0);
  xLine.setAttributeNS(null, "y1", 0);
  xLine.setAttributeNS(null, "y2", "100vw");
  xLine.style.stroke = "white";
  xLine.style.strokeWidth = 1;

  let yLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yLine.setAttributeNS(null, "id", "axisY");
  yLine.setAttributeNS(null, "x1", 0);
  yLine.setAttributeNS(null, "x2", "100vw");
  yLine.setAttributeNS(null, "y1", 0);
  yLine.setAttributeNS(null, "y2", 0);
  yLine.style.stroke = "white";
  yLine.style.strokeWidth = 1;

  s.appendChild(xLine);
  s.appendChild(yLine);

  document.body.appendChild(s);

  //do this as mouse moves
  addEventListener("mousemove", e => {
    //remove what you had before
    document.querySelectorAll(".hsl, .hue, .luminosity").forEach(e => e.remove());

    //set x,y
    let xLine = document.getElementById("axisX");
    xLine.setAttributeNS(null, "x1", 0);
    xLine.setAttributeNS(null, "x2", window.innerWidth);
    xLine.setAttributeNS(null, "y1", e.clientY);
    xLine.setAttributeNS(null, "y2", e.clientY);

    let yLine = document.getElementById("axisY");
    yLine.setAttributeNS(null, "x1", e.clientX);
    yLine.setAttributeNS(null, "x2", e.clientX);
    yLine.setAttributeNS(null, "y1", 0);
    yLine.setAttributeNS(null, "y2", window.innerHeight);

    //set bg to mouse position
    let x = e.clientX / window.innerWidth * 360;
    let y = e.clientY / window.innerHeight * 100;
    document.body.style.background = `hsl(${x}, 100%, ${y}%)`;

    //create the hsl div
    let hslDiv = document.createElement("div");
    hslDiv.className = "hsl text";
    hslDiv.textContent = `hsl(${Math.round(x)}, 100%, ${Math.round(y)}%)`;
    document.body.appendChild(hslDiv);

    //create hue div
    let hueDiv = document.createElement("div");
    hueDiv.className = "hue text";
    hueDiv.textContent = `hue
        ${Math.round(x)}`;
    document.body.appendChild(hueDiv);

    //create luminosity div
    let lumDiv = document.createElement("div");
    lumDiv.className = "luminosity text";
    lumDiv.textContent = `${Math.round(y)}
luminosity`;
    document.body.appendChild(lumDiv);
  })

  //do this on mouse click
  addEventListener("click", async e => {
    let val = document.getElementsByClassName('hsl')[0].textContent;
    await navigator.clipboard.writeText(val); // Modern clipboard API
  });
}
