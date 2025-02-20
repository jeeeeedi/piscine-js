function getArchitects() {
    const architects = Array.from(document.getElementsByTagName("a"));
    const notArchitects = Array.from(document.querySelectorAll("a"))
        .filter(element => !architects.includes(element));
    return [architects, notArchitects];
}

function getClassical() {
    let classicals = Array.from(document.getElementsByClassName("classical"));
    let nonClassicals = Array.from(document.querySelectorAll(".classical"))
        .filter(element => !classicals.includes(element));
    return [classicals, nonClassicals];
}

function getActive() {
    const classicals = getClassical()[0];
    const actives = classicals.filter(el => el.classList.contains("active"));
    const nonActives = classicals.filter(el => !el.classList.contains("active"));
    return [actives, nonActives];
}

function getBonannoPisano() {
    const actives = getActive()[0];
    const bon = [document.getElementById("BonannoPisano")];
    const notBon = actives.filter(el => el !== bon[0]);
    return [bon, notBon];
}

export { getArchitects, getClassical, getActive, getBonannoPisano };