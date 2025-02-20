let idCount = 1;

function build(int) {
    if (typeof int === "number" && int > 0) {
        const interval = setInterval(() => {
            if (idCount >= int + 1) {
                clearInterval(interval); // Stop execution once the limit is reached
                return;
            }
            const brick = document.createElement("div");
            brick.id = "brick-" + idCount;

            // if middle, add data foundation: 
            if ((idCount - 2) % 3 === 0) {
                brick.setAttribute("data-foundation", "true");
            }

            brick.innerHTML = `${idCount}`; //DELETE THIS LATER: just for me to keep track of bricks
            document.body.appendChild(brick);
            idCount++;

        }, 100);
    }
}

function repair(...ids) {
    for (let i = 0; i < ids.length; i++) {
        let repairing = document.getElementById(ids[i]);
        let idNum = Number(ids[i].slice(6));
        if ((idNum - 2) % 3 === 0) {        //if middle
            repairing.setAttribute("data-repaired", "in progress");
        } else {
            repairing.setAttribute("data-repaired", "true");
        }
    }
}

function destroy() {
    document.getElementById(`brick-${idCount - 1}`).remove(); // need to call id properly
    idCount--;
}

export { build, repair, destroy };