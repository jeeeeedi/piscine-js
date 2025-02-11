function indexOf(a, b, n) {
    if (n === undefined) {
        n = 0;
    }
    for (let i = n; i < a.length; i++) {
        if (a[i] === b) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(a, b, n) {
    if (n === undefined) {
        n = a.length - 1;
    }
    for (let i = n; i >= 0; i--) {
        if (a[i] === b) {
            return i;
        }
    }
    return -1;
}

function includes(a, b) {
    if (indexOf(a, b) !== -1) {
        return true;
    } else {
        return false;
    }
}