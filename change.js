const sourceObject = new Map([
    ['num', 42],
    ['bool', true],
    ['str', 'some text'],
    ['log', console.log],
]);

function get(k) {
    return sourceObject.get(k);
}

function set(k, v) {
    sourceObject.set(k, v);
    return v;
}
