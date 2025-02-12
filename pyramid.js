function pyramid(s, n) {
    let result = '';
    let spaces = '';
    let chars = '';
    const baseN = (n * 2 * s.length) - s.length;

    for (let line = 1; line <= n; line++) {
        const charN = (line * 2) - 1;

        //accumulate spaces
        for (let sp = 1; sp <= (baseN - charN * s.length) / 2; sp++) {
            spaces += ' ';
        }

        //accumulate chars
        for (let char = 1; char <= charN; char++) {
            chars += String(s);
        }

        result += spaces + chars;
        spaces = '';
        chars = '';

        if (line < n) {
            result += '\n';
        }
    }

    return result;
}

