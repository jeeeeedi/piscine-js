//isValid: accepts a Date, and returns false if the Date is invalid.
function isValid(d) {
    if (typeof d === 'string' || d === undefined || d === null || d === NaN || d === '' || d === new Date('') || d === new Date(NaN) || isNaN(new Date(d).getTime())) {
        return false;
    } else if (new Date(d) !== invalid) {
        return true;
    }
}

//isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
function isAfter(d1, d2) {
    if (isValid(d1) && isValid(d2)) {
        if (new Date(d1).getTime() > new Date(d2).getTime()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
function isBefore(d1, d2) {
    if (isValid(d1) && isValid(d2)) {
        if (new Date(d1).getTime() < new Date(d2).getTime()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
function isFuture(d) {
    if (isValid(d)) {
        if (new Date(d).getTime() > Date.now()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


//isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
function isPast(d) {
    if (isValid(d)) {
        if (new Date(d).getTime() < Date.now()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}