function firstDayWeek(week, year) {
    let date = new Date(year);

    let firstDayofYear = date.getDay(); // Sunday-Saturday: 0-6
    let zeroMonday = (firstDayofYear + 6) % 7; // Convert Sunday=0 to Monday=0

    date.setDate(date.getDate() - zeroMonday - 1);

    if (week === 1) {
        date.setDate(date.getDate() + ((week - 1) * 7) + 3);
    } else {
        date.setDate(date.getDate() + ((week - 1) * 7) + 1);
    }
    return formatDate(date);
}

// Helper function to format date as 'DD-MM-YYYY'
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).padStart(4, '0'); // Ensure 4-digit year
    return `${day}-${month}-${year}`;
}
