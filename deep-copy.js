function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) return obj.map(deepCopy);

    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj === 'function') return obj.bind(null);

    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}