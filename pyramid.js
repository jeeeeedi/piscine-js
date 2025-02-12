function pyramid(s, n) {
    let result = '';
    let spaces = '';
    let chars = '';
    const baseN = n + (n - 1);

    for (let line = 1; line <= n; line++) {
        const charN = (line * 2) - 1;

        //accumulate spaces
        for (let sp = 1; sp <= (baseN - charN) / 2; sp++) {
            spaces += ' ';
        }

        //accumulate chars
        for (let char = 1; char <= charN; char++) {
            chars += String(s);
        }

        result += spaces + chars + spaces;
        spaces = '';
        chars = '';

        if (line < n) {
            result += '\n';
        }
    }

    return result;
}

/* console.log(pyramid('*', 5)) */