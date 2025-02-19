function map(arr, fn) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(fn(arr[i], i, arr));
        }
        return newArr;
    }
}

function flatMap(arr, fn) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(...[].concat(fn(arr[i], i, arr)));
        }

        return newArr;
    }
}