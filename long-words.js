function longWords(arr) {
    if (Array.isArray(arr)) {
        return arr.every(el => (typeof el === 'string' ? (el.length >= 5 ? true : false) : false));
    }
}

function oneLongWord(arr) {
    if (Array.isArray(arr)) {
        return arr.some(el => (typeof el === 'string' ? (el.length >= 10 ? true : false) : false));
    }
}

function noLongWords(arr) {
    if (Array.isArray(arr)) {
        return arr.every(el => (typeof el === 'string' ? (el.length >= 7 ? false : true) : true));
    }
}
