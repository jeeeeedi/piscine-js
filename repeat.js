function repeat(s, n) {

    if (n < 1 || typeof n !== 'number') {
        return '';
    } else if (n === 1) {
        return s;
    } else if (n > 1) {
        let result = s
        for (let i = 0; i < n-1; i++) {
            result = result + s;
        }
        return result;
    }
}
