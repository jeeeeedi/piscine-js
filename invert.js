function invert(obj) {

    origKeys = Object.keys(obj);
    origValues = Object.values(obj);

    return origValues.reduce((acc, v, i) => {
        acc[v] = origKeys[i];
        return acc;
    }, {});
}
