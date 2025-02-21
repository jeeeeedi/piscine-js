import { colors } from './fifty-shades-of-cold.data.js'

const cold = /(aqua|blue|turquoise|green|cyan|navy|purple)/;

function generateClasses() {
    const style = document.createElement("style");
    style.textContent = "";
    for (let i = 0; i < colors.length; i++) {
        if (cold.test(colors[i])) {
            style.textContent += `.${colors[i]} {
            background: ${colors[i]};
          }
            `;

            /*      const block = document.createElement("div");
                 block.textContent = `${colors[i]}`;
                 block.classList.add(`${colors[i]}`);
                 document.body.appendChild(block); */
        }
    }
    document.head.appendChild(style);

}


function generateColdShades() {

    for (let i = 0; i < colors.length; i++) {
        if (cold.test(colors[i])) {
           /*  const style = document.createElement("style");
            style.textContent = `.${colors[i]} {
    background: ${colors[i]};
  }`;
            document.head.appendChild(style); */

            const block = document.createElement("div");
            block.textContent = `${colors[i]}`;
            block.classList.add(`${colors[i]}`);
            document.body.appendChild(block);
        }
    }
}

function choseShade(shade) {
    document.querySelectorAll("div").forEach(div => {
        colors.forEach(color => {
            if (div.classList.contains(color)) {
                div.classList.replace(color, shade); // Replace old color with new one
                console.log(`Replaced ${color} with ${shade} in div:`, div);
            }
        });
    });
}

export { generateClasses, generateColdShades, choseShade };
