function triangle(s, n) {
    let result = '';

    for (let line = 1; line <= n; line++) {
        for (let char = 1; char <= line; char++) {
            result += String(s);
        }
        if (line < n) {
            result += '\n';
        }
    }

    return result;
}

/* console.log(triangle('*', 5)) */