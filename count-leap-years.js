function countLeapYears(d) {
    let year = d.getFullYear();
    let count = 0;
    for (let i = 1; i < year;) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) { //isLeapYear algo
            count++;
            i += 3;
        } else {
            i++;
        }
    }
    return count;
}
