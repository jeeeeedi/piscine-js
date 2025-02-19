function filter(arr, fn) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}

function reject(arr, fn) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!(fn(arr[i], i, arr))) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}

function partition(arr, fn) {
    if (Array.isArray(arr)) {
        let trueArr = [];
        let falseArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                trueArr.push(arr[i]);
            } else {
                falseArr.push(arr[i]);
            }
        }
        return [trueArr, falseArr];
    }
}