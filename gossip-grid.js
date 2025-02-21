import { gossips } from './gossip-grid.data.js';

export function grid() {
    // Create ranges container
    const ranges = document.createElement("div");
    ranges.classList.add("ranges");

    // Width range input
    const widthRange = document.createElement("input");
    widthRange.type = "range";
    widthRange.id = "width";
    widthRange.min = "200";
    widthRange.max = "800";
    widthRange.value = "400";
    widthRange.addEventListener("input", (e) => {
        const boxes = document.querySelectorAll(".gossip");
        boxes.forEach((box) => {
            box.style.width = e.target.value + "px";
        });
    });

    // Font size range input
    const fontSizeRange = document.createElement("input");
    fontSizeRange.type = "range";
    fontSizeRange.id = "fontSize";
    fontSizeRange.min = "20";
    fontSizeRange.max = "40";
    fontSizeRange.value = "30";
    fontSizeRange.addEventListener("input", (e) => {
        const boxes = document.querySelectorAll(".gossip");
        boxes.forEach((box) => {
            box.style.fontSize = e.target.value + "px";
        });
    });

    // Background color range input
    const backgroundColorRange = document.createElement("input");
    backgroundColorRange.type = "range";
    backgroundColorRange.id = "background";
    backgroundColorRange.min = "20";
    backgroundColorRange.max = "75";
    backgroundColorRange.value = "50";
    backgroundColorRange.addEventListener("input", (e) => {
        const boxes = document.querySelectorAll(".gossip");
        boxes.forEach((box) => {
            box.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`;
        });
    });

    // Append range inputs to ranges container
    ranges.appendChild(widthRange);
    ranges.appendChild(fontSizeRange);
    ranges.appendChild(backgroundColorRange);
    document.body.appendChild(ranges);

    // Create form for new gossip
    const form = document.createElement("form");
    form.classList.add("gossip");

    const textarea = document.createElement("textarea");
    const button = document.createElement("button");
    button.textContent = "Share gossip!";
    button.type = "submit";
    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (textarea.value.trim()) {
            const newGoss = document.createElement("div");
            newGoss.classList.add("gossip");
            newGoss.textContent = textarea.value;

            document.body.appendChild(newGoss);
            textarea.value = "";
            form.insertAdjacentElement("afterend", newGoss);
        }
    });

    // Append textarea and button to form
    form.appendChild(textarea);
    form.appendChild(button);
    document.body.appendChild(form);

    // Create and append each gossip
    gossips.forEach((gossip) => {
        const boxDiv = document.createElement("div");
        boxDiv.classList.add("gossip");
        boxDiv.textContent = gossip;
        document.body.appendChild(boxDiv);
    });
}