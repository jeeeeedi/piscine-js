function nasa(N) {
    let result = '';

    for (let i = 1; i <= N; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result += String('NASA');
        } else if (i % 3 === 0) {
            result += String('NA');
        } else if (i % 5 === 0) {
            result += String('SA');
        } else {
            result += String(i);
        }
        if (i < N) {
            result += ' ';
        }

    }
    return result;
}
