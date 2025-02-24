function fusion(obj1, obj2) {

    const result = { ...obj1 };

    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            // For array types, you will concatenate them.
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                result[key] = [...obj1[key], ...obj2[key]];
            }
            // For strings, you must concatenate them with a space.
            else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                result[key] = obj1[key] + " " + obj2[key];
            }
            // If they are numbers, you must add them.
            else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
                result[key] = obj1[key] + obj2[key];
            }
            // If it is an object, you must join them recursively.
            else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
                result[key] = fusion(obj1[key], obj2[key]);
            }
            // In case of type mismatch you must replace it with the value of the second object (if it exists).
            else {
                result[key] = (obj2[key] !== '' ? obj2[key] : '');
            }
        }
    }

    return result;
}