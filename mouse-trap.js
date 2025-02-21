let lastCircle = null;
let isTrapped = false;

function createCircle(e) {
    const c = document.createElement("div");
    c.classList.add("circle");

    c.style.background = "white";
    c.style.left = `${e.clientX - 25}px`;
    c.style.top = `${e.clientY - 25}px`;
    document.body.appendChild(c);
    lastCircle = c;
    isTrapped = false;
}

function moveCircle(e) {
    const box = document.querySelector('.box');

    if (lastCircle && !isTrapped) {
        // Update the position of the last circle
        lastCircle.style.left = `${e.clientX - 25}px`;  // Center the circle on the mouse
        lastCircle.style.top = `${e.clientY - 25}px`;   // Center the circle on the mouse
    }

    // Check if the circle is inside the box
    if (isCircleInsideBox(lastCircle, box)) {
        lastCircle.style.background = 'var(--purple)';
        isTrapped = true;
    } else if (!isTrapped) {
        lastCircle.style.background = 'white';
    }

    // Function to check if the circle is inside the box
    function isCircleInsideBox(lastCircle, box) {
        if (!lastCircle || !box) return false;

        // Get bounding rectangles
        const circleRect = lastCircle.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();

        // Check if the circle is inside the box
        return (
            circleRect.left >= boxRect.left &&
            circleRect.right <= boxRect.right &&
            circleRect.top >= boxRect.top &&
            circleRect.bottom <= boxRect.bottom
        );
    }

    // Prevent the circle from moving outside the box if it is trapped
    if (isTrapped) {
        const circleRect = lastCircle.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();

        if (circleRect.left < boxRect.left) {
            lastCircle.style.left = `${boxRect.left}px`;
        }
        if (circleRect.right > boxRect.right) {
            lastCircle.style.left = `${boxRect.right - circleRect.width}px`;
        }
        if (circleRect.top < boxRect.top) {
            lastCircle.style.top = `${boxRect.top}px`;
        }
        if (circleRect.bottom > boxRect.bottom) {
            lastCircle.style.top = `${boxRect.bottom - circleRect.height}px`;
        }
    }
}

function setBox() {
    const b = document.createElement("div");
    b.classList.add("box");
    document.body.appendChild(b);
}

export const mouseCreate = document.addEventListener("click", createCircle);
export const mouseMove = document.addEventListener("mousemove", moveCircle);

export { setBox, createCircle, moveCircle };