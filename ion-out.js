function ionOut(s) {
    let result = [];

    let ion = /\b(\w+)(?<=\w(T|t))(ion)\b/g;
    let match = s.match(ion) || [];

    for (let i = 0; i < match.length; i++) {
        result.push(match[i].slice(0, -3));
    }

    return result;
}