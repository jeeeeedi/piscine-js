function matchCron(string, d) {
    if (typeof string === 'string' && isValid(d)) {
        let dateArr = [];
        let min = dateArr.push(d.getMinutes());
        let hour = dateArr.push(d.getHours());
        let date = dateArr.push(d.getDate());
        let month = dateArr.push(d.getMonth() + 1); // default is (January gives 0) but we want (range: 1-12)
        let day = d.getDay();    // default is Sunday - Saturday : 0 - 6 / but we want (range: 1-7, 1 is Monday)
        if (d.getDay() === 0) {
            dateArr.push(7);
        } else {
            dateArr.push(d.getDay());
        }

        let strArr = [];
        for (let s = 0; s < string.length; s++) {
            if (string[s] !== ' ') {
                strArr.push(Number(string[s]));
            }
        }

        for (let i = 0; i < strArr.length; i++) {
            if (isNaN(strArr[i])) {
                continue;  // Skip if strArr[i] is NaN
            }
            if (strArr[i] !== dateArr[i]) {
                return false; // Return false if elements don't match
            }
        }
        return true; // All matching or NaN values
    } else {
        return false;
    }

}

function isValid(d) {
    if (typeof d === 'string' || d === undefined || d === null || d === NaN || d === '' || d === new Date('') || d === new Date(NaN) || isNaN(new Date(d).getTime())) {
        return false;
    }
    return true;
}
