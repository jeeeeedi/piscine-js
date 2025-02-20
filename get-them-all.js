function getArchitects(arr) {
    if (Array.isArray(arr)) {
        let architect = arr.map(architects => architects.tag === 'a');
        let notArchitect = arr.map(notArchitects => notArchitects.tag !== 'a');
        return [architect, notArchitect];
    }
}

function getClassical(arr) {
    if (Array.isArray(arr)) {
        let classical = arr.map(classicals => classicals.classe === 'classical');
        let notClassical = arr.map(notClassical => notClassical.classe !== 'classical');
        return [classical, notClassical];
    }
}

function getActive(arr) {
    if (Array.isArray(arr)) {
        let classical = getClassical(arr)[0];
        let active = classical.filter(actives => actives.active === true);
        let nonActive = classical.filter(nonActives => nonActives.active === false);
        return [active, nonActive];
    }
}

function getBonannoPisano(arr) {
    if (Array.isArray(arr)) {
        let bon = document.getElementById("BonannoPisano");
        let notBon = Array.from(document.querySelectorAll('a'))
            .filter(noBon => noBon.id !== 'BonannoPisano' && getActive(arr)[0]
                .some(active => active.id === noBon.id));
        return [bon, notBon];
    }
}

export { getArchitects, getClassical, getActive, getBonannoPisano };