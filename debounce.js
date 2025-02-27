function debounce(callback, delay = 0) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

function opDebounce(callback, delay = 0, leading = false) {
    let timeout;
    let isLeadingCalled = false;

    return function (...args) {
        if (leading && !isLeadingCalled) {
            callback(...args);
            isLeadingCalled = true;
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            isLeadingCalled = false;
        }, delay);
    };
}