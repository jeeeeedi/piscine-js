const sourceObjectMap = new Map(Object.entries(sourceObject));

function get(k) {
    return sourceObjectMap.get(k);
}

function set(k, v) {
    sourceObjectMap.set(k, v);
    return v;
}
