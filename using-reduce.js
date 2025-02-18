function adder(...arr) {
    if (Array.isArray(arr)) {
        return (arr.flat(Infinity)).reduce((acc, num) => acc + num, 0);
    }
}

function sumOrMul(arr) {
    if (Array.isArray(arr)) {
        return ((arr.flat(Infinity)).some(el => ((el) % 2 === 0))).reduce((acc, num) => acc + num, 0);
    }
}

function funcExec(arr) {
    if (Array.isArray(arr)) {
        return;
    }
}

// TESTS

/* console.log(adder([1, 2, 3, 4]))
console.log(adder([9, 24, 7, 11, 3], 10))
console.log(adder([])) */

console.log((sumOrMul([29, 23, 3, 2, 25]), 135))