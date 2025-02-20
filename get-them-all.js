function getArchitects() {
    const architects = Array.from(document.getElementsByTagName("a"));
    const notArchitects = Array.from(document.querySelectorAll('span'));
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
    const bon = document.getElementById('BonannoPisano');
    const notBon = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
    return [[bon], notBon];
}

export { getArchitects, getClassical, getActive, getBonannoPisano };