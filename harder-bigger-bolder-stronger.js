function generateLetters() {
    function randomLetter() {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }
    let fontsizeNum = 11;
    for (let i = 1; i <= 120; i++) {
        const letter = document.createElement("div");
        document.body.appendChild(letter);
        letter.textContent = `${randomLetter()}`;
        if (fontsizeNum >= 11 && fontsizeNum <= 130) {
            letter.style.fontSize = `${fontsizeNum}px`;
            fontsizeNum++;
        }
        if (i >= 1 && i <= 40) {
            letter.style.fontWeight = 300;
        } else if (i >= 41 && i <= 80) {
            letter.style.fontWeight = 400;
        } else if (i >= 81 && i <= 120) {
            letter.style.fontWeight = 600;
        }
    }
}

export { generateLetters };