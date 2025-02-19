function fold(arr, fn, acc) {
    if (Array.isArray(arr)) {
        let sum = typeof acc === 'number' ? acc : 0;
        let result = typeof acc === 'string' ? acc : '';
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                sum = Number(fn(sum, arr[i]));
            } else {
                result += arr[i];
            }
        }
        return typeof acc === 'number' ? sum : result;
    }
}

function foldRight(arr, fn, acc) {
    if (Array.isArray(arr)) {
        let sum = typeof acc === 'number' ? acc : 0;
        let result = typeof acc === 'string' ? acc : '';
        for (let i = arr.length - 1; i >= 0; i--) {
            if (typeof arr[i] === 'number') {
                sum = Number(fn(sum, arr[i]));
            } else {
                result += arr[i];
            }
        }
        return typeof acc === 'number' ? sum : result;
    }
}

function reduce(arr, fn) {
    if (Array.isArray(arr) && arr.length >= 1) {
        let sum = 0;
        let result = '';
        let newObj = {};
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                sum = Number(fn(sum, arr[i]));
            } else if (typeof arr[i] === 'string') {
                result += arr[i];
            } else if (typeof arr[i] === 'object') {
                newObj = { ...newObj, ...arr[i] };
            }
        }
        return sum || result || newObj;
    } else {
        throw Error;
    }
}

function reduceRight(arr, fn) {
    if (Array.isArray(arr) && arr.length >= 1) {
        let sum = 0;
        let result = '';
        let newObj = {};
        for (let i = arr.length - 1; i >= 0; i--) {
            if (typeof arr[i] === 'number') {
                sum = Number(fn(sum, arr[i]));
            } else if (typeof arr[i] === 'string') {
                result += arr[i];
            } else if (typeof arr[i] === 'object') {
                newObj = { ...newObj, ...arr[i] };
            }
        }
        return sum || result || newObj;
    } else {
        throw Error;
    }
}
