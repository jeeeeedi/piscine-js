//cutFirst: returns the string with the first 2 characters removed.
function cutFirst(s) {
    if (s.length > 2) {
        return s.slice(2);
    } else {
        return '';
    }
}

//cutLast returns the string with the last 2 characters removed.
function cutLast(s) {
    if (s.length > 2) {
        return s.slice(0, s.length - 2);
    } else {
        return '';
    }
}

//cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.
function cutFirstLast(s) {
    if (s.length > 4) {
        return s.slice(2, s.length - 2);
    } else {
        return '';
    }
}

//keepFirst returns only the first 2 characters.
function keepFirst(s) {
    if (s.length > 2) {
        return s.slice(0, 2);
    } else {
        return s;
    }
}

//keepLast returns only the last 2 characters.
function keepLast(s) {
    if (s.length > 2) {
        return s.slice(s.length - 2);
    } else {
        return s;
    }
}

//keepFirstLast returns the first 2 characters, and the last 2 characters.
function keepFirstLast(s) {
    if (s.length > 4) {
        return s.slice(0, 2) + s.slice(s.length - 2);
    } else {
        return s;
    }
}