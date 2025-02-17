function dayOfTheYear(d) {
    let startDate = new Date(d);
    startDate.setMonth(0);
    startDate.setDate(1);

    const timeDifference = d - startDate; // Difference in milliseconds
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)) + 1; // Convert milliseconds to days

    return daysDifference;
}
