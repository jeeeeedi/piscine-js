function createCircle(e) {
    const c = document.createElement("div");
    c.setAttribute('class', 'circle')

    c.style.background = "white";
    c.style.left = `${e.clientX - 25}px`;
    c.style.top = `${e.clientY - 25}px`;
    document.body.appendChild(c);
}

function moveCircle(e) {
    const lastC = document.querySelector('div:last-child')
    lastC.style.left = `${e.clientX - 25}px`
    lastC.style.top = `${e.clientY - 25}px`
    document.body.append(lastC)
    let b = document.querySelector('div.box')
    let d = b.getBoundingClientRect()
    if (lastC.getAttribute('class') !== 'box') {
        if ((+lastC.style.left.replace('px', '') > (d.x)) && (+lastC.style.left.replace('px', '') < (d.right - 50)) && (+lastC.style.top.replace('px', '') > (d.top)) && (+lastC.style.top.replace('px', '') < (d.bottom - 50))) {
            lastC.style.background = 'var(--purple)'
        }
    }
    if (e.clientX - 25 < (d.x) && lastC.style.background === 'var(--purple)') {
        lastC.style.left = (d.x).toString() + 'px'
        if (e.clientY - 25 < (d.top)) {
            lastC.style.top = (d.y).toString() + 'px'
        }
        if (e.clientY - 25 > (d.bottom - 50)) {
            lastC.style.top = (d.bottom - 50).toString() + 'px'
        }
    } else if (e.clientX - 25 > (d.right - 50) && lastC.style.background === 'var(--purple)') {
        lastC.style.left = (d.right - 50).toString() + 'px'
        if (e.clientY - 25 < (d.top)) {
            lastC.style.top = (d.y).toString() + 'px'
        }
        if (e.clientY - 25 > (d.bottom - 50)) {
            lastC.style.top = (d.bottom - 50).toString() + 'px'
        }
    } else if ((e.clientY - 25 > (d.bottom - 50)) && lastC.style.background === 'var(--purple)') {
        lastC.style.top = (d.bottom - 50).toString() + 'px'
    } else if ((e.clientY - 25 < (d.top)) && lastC.style.background === 'var(--purple)') {
        lastC.style.top = (d.top).toString() + 'px'
    }
}

function setBox() {
    const b = document.createElement("div");
    b.setAttribute('class', 'box');
    document.body.appendChild(b);
}

export const mouseCreate = document.addEventListener("click", createCircle);
export const mouseMove = document.addEventListener("mousemove", moveCircle);

export { setBox, createCircle, moveCircle };