//isFriday: returns true if the Date is a Friday.
function isFriday(d) {
    if (d.getDay() === 5) {
        return true;
    } else {
        return false;
    }
}

//isWeekend: returns true if the Date is a weekend day.
function isWeekend(d) {
    if (d.getDay() === 6 || d.getDay() === 0) {
        return true;
    } else {
        return false;
    }
}

//isLeapYear: returns true if the year of the Date is a leap year.
function isLeapYear(d) {
    let year = d.getFullYear();
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

//isLastDayOfMonth: returns true if the Date represents the last day of the month.
function isLastDayOfMonth(d) {
    const date = d.getDate();
    const m = d.getMonth();
    const thirtyDays = [3, 5, 8, 10]; // 30 days: sept 9 , april 4, june 6, nov 11

    if (m === 1) { // February
        if (isLeapYear(d)) {
            return date === 29;
        } else {
            return date === 28;
        }
    } else if (thirtyDays.includes(m)) {
        return date === 30;
    } else {
        return date === 31;
    }
}