function addWeek(date) {
    if (typeof date === 'object') {
        const startDate = new Date("0001-01-01"); // Set a reference start date
        const diffDays = Math.floor((date - startDate) / (1000 * 60 * 60 * 24)); // Find difference in days
        const customDayIndex = diffDays % 14; // Loop through 14-day cycle
        const customDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];
        return customDays[customDayIndex];
    }
}


function timeTravel(obj) {
    if (typeof obj === 'object') {
        const newDate = new Date(obj.date.setHours(obj.hour, obj.minute, obj.second));
        return newDate;
    }
}
