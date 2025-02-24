function pick(obj, str) {
    return (Array.isArray(str) ? str : [str])
        .reduce((acc, k) => {
            if (k in obj) {
                acc[k] = obj[k];
            }
            return acc;
        }, {});
}

function omit(obj, str) {
    return Object.keys(obj)
        .filter(key => !((Array.isArray(str)
            ? str
            : [str]).includes(key)))  // Filter out keys in str
        .reduce((acc, key) => {
            acc[key] = obj[key];  // Add the remaining keys to the new object
            return acc;
        }, {});
}
