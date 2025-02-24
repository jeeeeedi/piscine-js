function filterValues(obj, condition) {
    return Object.fromEntries( //converts array back into an object.
        Object.entries(obj) //converts obj into an array of key-value pairs
            .filter(([k, v]) => condition(v)));  // Filter based on condition
}

function mapValues(obj, condition) {
    return Object.fromEntries(
        Object.entries(obj)
            .map(([k, v]) => [k, condition(v)]));
}

function reduceValues(obj, condition, i) {
    return Object.values(obj)
        .reduce((a, c) => a + c,
            (i ? i : 0));
}
