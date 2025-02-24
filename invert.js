function invert(obj) {
    return Object.values(obj).map((v, i) => ({ [v]: Object.keys(obj)[i] }));
}
