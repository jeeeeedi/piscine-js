function getArchitects() {
    const architects = Array.from(document.getElementsByTagName("a"));
    const notArchitects = Array.from(document.getElementsByTagName('span'));
    return [architects, notArchitects];
}

function getClassical() {
    let classicals = Array.from(document.getElementsByClassName("classical"));
    let nonClassicals = Array.from(document.querySelectorAll('a:not(.classical)'));
    return [classicals, nonClassicals];
}

function getActive() {
    const actives = Array.from(document.getElementsByClassName('classical active'));
    const nonActives = Array.from(document.querySelectorAll('a.classical:not(.active)'));
    return [actives, nonActives];
}

function getBonannoPisano() {
    let bon = document.getElementById("BonannoPisano");
    let notBon = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
    console.log(bon, notBon)
    return [bon, notBon];
}

export { getArchitects, getClassical, getActive, getBonannoPisano };