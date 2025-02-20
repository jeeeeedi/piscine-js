import { styles } from './pimp-my-style.data.js'

let clickCounter = 0;

function pimp() {
    let btn = document.getElementsByTagName("button")[0];
    if (!btn.classList.contains("unpimp")) {
        btn.classList.add(`${styles[clickCounter]}`);
        clickCounter++;
    } else {
        clickCounter--;
        btn.classList.remove(`${styles[clickCounter]}`);
        if (clickCounter === 0) {
            btn.classList.toggle("unpimp");
        }
    }
    if (clickCounter === styles.length) {
        btn.classList.toggle("unpimp");
    }

}

export { pimp };