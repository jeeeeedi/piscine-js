function countLeapYears(d) {
    let year = d.getFullYear();
    let count = 0;
    for (i = 1; i < year;) {
        if (isLeapYear(i)) {
            count++;
            i += 3;
        } else {
            i++;
        }
    }
    return count;
}

//isLeapYear: returns true if the year of the Date is a leap year.
function isLeapYear(i) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
