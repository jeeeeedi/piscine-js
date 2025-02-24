function invert(obj) {

    return Object.fromEntries(Object.values(obj).map((v, i) => [v, Object.keys(obj)[i]]));

}

