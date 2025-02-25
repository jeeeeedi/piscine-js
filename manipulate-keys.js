function filterKeys(obj, condition) {
    return Object.fromEntries( //converts array back into an object.
        Object.entries(obj) //converts obj into an array of key-value pairs
            .filter(([k, v]) => condition(k)));  // Filter based on condition
}

function mapKeys(obj, condition) {
    return Object.fromEntries(
        Object.entries(obj)
            .map(([k, v]) => [condition(k), v]));
}

function reduceKeys(obj, condition, initialValue) {
    if (initialValue === 0) {
        return 0;
    } else if (initialValue) {
        return Object.keys(obj)
            .reduce((acc, k, i) => {
                return condition(acc, k, i);
            }, initialValue
            );
    } else {
        return Object.keys(obj)
            .reduce((acc, k) => (condition(acc, k)));
    }
}