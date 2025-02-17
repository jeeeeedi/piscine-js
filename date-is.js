//isValid: accepts a Date, and returns false if the Date is invalid.
function isValid(d) {
    if (d === undefined || d === null || d === NaN || d === '' || d === new Date('') || d === new Date(NaN) || new Date(d) === invalid) {
        return false;
    } else if (new Date(d) !== invalid) {
        return true;
    }
}

//isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
function isAfter(d1, d2) {
    if (isValid(d1) > isValid(d2)) {
        return true;
    } else {
        return false;
    }
}

//isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
function isBefore(d1, d2) {
    if (isValid(d1) < isValid(d2)) {
        return true;
    } else {
        return false;
    }
}

//isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
function isFuture(d) {
    if (isValid(d) > Date.now()) {
        return true;
    } else {
        return false;
    }
}


//isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
function isPast(d) {
    if (isValid(d) < Date.now()) {
        return true;
    } else {
        return false;
    }
}

/* 
// is the date a valid date?
const invalid = (callback, ary = 1) => {
    for (const s of [
        `new Date('')`,
        `new Date(NaN)`,
        `''`,
        `'2013-01-01'`,
        `NaN`,
    ]) {
        if (callback(...Array(ary).fill(eval(s)))) {
            return (`${callback.name}(${s}) should be false`);
        }
    }
}

// isValid
console.log(!invalid(isValid))
console.log(isValid(new Date()))
console.log(isValid(Date.now()))
console.log(isValid(new Date('December 17, 1995 03:24:00')))
console.log(isValid(new Date(1488370835081)))
console.log(isValid(new Date('1995-12-17T03:24:00')))
console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))
//console.log(new Date('1995-12-17T03:24:00').getTime())


// isAfter
console.log(!invalid(isAfter, 2))
console.log(!isAfter(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(!isAfter(new Date('2157-11-07'), new Date('2183-04-16')))
console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))
console.log(isAfter(123123, 526))

// isBefore
console.log(!invalid(isBefore, 2))
console.log(!isBefore(new Date(2321, 11, 21), new Date(Date.now())))
console.log(!isBefore(123123, 526))
console.log(isBefore(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(isBefore(new Date('2157-11-07'), new Date('2183-04-16')))

// isFuture
console.log(!invalid(isFuture))
console.log(!isFuture(new Date('1992-01-01')))
console.log(!isFuture(new Date(Date.now() - 1)))
console.log(isFuture(new Date(2077, 11, 31)))
console.log(isFuture(new Date(Date.now() + 1)))

// isPast
console.log(!invalid(isPast))
console.log(!isPast(new Date(Date.now() + 1)))
console.log(!isPast(new Date(2077, 11, 31)))
console.log(isPast(new Date(1442, 11, 31)))
console.log(isPast(new Date(Date.now() - 1))) */