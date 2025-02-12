function letterSpaceNumber(s) {
    let result = [];
    let regex = /(\w) (\d)(?!\w)/g;
    let match;

    while ((match = regex.exec(s)) !== null) {
        result.push(match[0]);
    }

    return result;
}
