function adder(...arr) {
    if (Array.isArray(arr)) {
        return (arr.flat(Infinity)).reduce((acc, num) => acc + num, 0);
    }
}

function sumOrMul(arr) {
    if (Array.isArray(arr)) {
        return (arr.flat(Infinity)).reduce((acc, num) => {
            return num % 2 === 0 ? acc * num : acc + num;
        }, 0);
    }
}

function funcExec(arr, i) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, fn) => fn(acc), i);
    }
}
