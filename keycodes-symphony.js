function compose(e) {
    let key = e.key;
    if ((key >= 'a' && key <= 'z') || (key === ' ')) {

        const note = document.createElement("div");
        document.querySelector("div");
        note.textContent += ` ${e.key}`;
        note.classList.add("note");

        note.style.backgroundColor = getColorFromKey(key);
        document.body.appendChild(note);
    } else if (key === "Backspace") {
        document.body.removeChild(document.body.lastElementChild); // need to call id properly

    } else if (key === "Escape") {
        document.body.innerHTML = "";
    }

    function getColorFromKey(key) {
        let charCode = key.charCodeAt(0) - 97; // 'a' is 97, so we normalize it to 0-25
        let hue = (charCode / 26) * 360; // Map to the 360-degree hue spectrum
        if (key === ' ') {
            return `black`;
        }
        return `hsl(${hue}, 80%, 60%)`; // Saturation and lightness fixed for vibrant colors

    }
}

export const key = document.addEventListener("keydown", compose);

export { compose };