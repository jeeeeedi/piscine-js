import { styles } from './pimp-my-style.data.js'

function pimp() {
    let clickCounter = 0;
    let styleCounter = 0;
    let btn = document.getElementsByTagName("button")[0];
    btn.addEventListener("click", () => {
        if (clickCounter <= styles.length) {
            btn.classList.add(`${styles[styleCounter]}`);
            clickCounter++;
            styleCounter++;
        } else if (clickCounter >= styles.length && clickCounter <= (styles.length * 2)) {
            btn.classList.remove(`${styles[styleCounter]}`);
            clickCounter++;
            styleCounter--;
        }

    });
}

export { pimp };