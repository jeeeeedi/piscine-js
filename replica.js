function replica(target, ...sources) {
    if (!target || typeof target !== 'object') {
        throw new Error('Target must be an object');
    }

    if (typeof target === 'function') return target.bind(null);

    sources.forEach(source => {
        if (!source || typeof source !== 'object') return;

        Object.keys(source).forEach(key => {
            const srcValue = source[key];
            const tgtValue = target[key];

            if (Array.isArray(srcValue)) {
                target[key] = [...srcValue]; // Clone array
            } else if (srcValue instanceof RegExp) {
                target[key] = new RegExp(srcValue); // Clone RegExp
            } else if (typeof srcValue === 'object' && srcValue !== null) {
                if (typeof tgtValue !== 'object' || tgtValue === null || Array.isArray(tgtValue)) {
                    target[key] = replica({}, srcValue); // Replace target value with a new object
                } else {
                    target[key] = replica(tgtValue, srcValue); // Deep merge objects
                }
            } else {
                target[key] = srcValue; // Directly assign values
            }
        });
    });

    return target;
}