function sameAmount(s, a, b) {
    const matchA = [...s.matchAll(new RegExp(a, 'g'))];
    const matchB = [...s.matchAll(new RegExp(b, 'g'))];
    return matchA.length === matchB.length;
}