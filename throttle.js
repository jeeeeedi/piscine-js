function throttle(callback, delay = 0) {
    let shouldWait = false;
    let waitingArgs = null;

    const timeoutFunc = () => {
        if (waitingArgs === null) {
            shouldWait = false;
        } else {
            callback(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    };

    return function (...args) {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        callback(...args);
        shouldWait = true;
        setTimeout(timeoutFunc, delay);
    };

}

function opThrottle(callback, delay = 0, options = { leading: false, trailing: true }) {
    let shouldWait = false;
    let waitingArgs = null;
    let timeoutId = null;

    const timeoutFunc = () => {
        if (waitingArgs && options.trailing) {
            callback(...waitingArgs);
            waitingArgs = null;
            timeoutId = setTimeout(timeoutFunc, delay);
        } else {
            shouldWait = false;
            timeoutId = null;
        }
    };

    return function (...args) {
        const callNow = options.leading && !shouldWait;

        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        if (callNow) {
            callback(...args);
        } else if (options.trailing) {
            waitingArgs = args;
        }

        shouldWait = true;
        timeoutId = setTimeout(timeoutFunc, delay);
    };
}