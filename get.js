function get(src, path) {
    if (typeof src !== 'object') {
        return undefined;
    }

    const keys = Array.isArray(path) ? path : path.split('.');
    let acc = src; // Start with the source object

    for (const key of keys) {
        if (acc && key in acc) {
            acc = acc[key]; // Move deeper into the object
        } else {
            return undefined; // If key doesn't exist, return undefined
        }
    }

    return acc; // Final resolved value
}
