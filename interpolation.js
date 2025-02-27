function interpolation(obj) {
    const { step, start, end, callback, duration } = obj;

    let incrementX = (end - start) / step;
    const delay = duration / step;

    let currentStep = 0;

    let intervalId = setInterval(() => {
        if (currentStep < step) {
            let x = start + incrementX * currentStep;
            let y = delay * (currentStep + 1);
            callback([x, y]);
            currentStep++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}