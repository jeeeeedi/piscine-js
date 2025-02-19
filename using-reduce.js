function adder(arr, i) {
        return arr.reduce((acc, num) => acc + num, (i === undefined ? 0 : i));
}

function sumOrMul(arr, i) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, num) => {
            return num % 2 === 0 ? acc * num : acc + num;
        }, (i === undefined ? 0 : i));
    }
}

function funcExec(arr, i) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, fn) => fn(acc), (i === undefined ? 0 : i));
    }
}
