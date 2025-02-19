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
        loop(arr, fn);
        function loop(arr, fn) {
            for (let i = 0; i < arr.length; i++) {
                Array.isArray(arr[i]) ? loop(arr[i], fn) : newArr.push(...[].concat(fn(arr[i], i, arr)));
            }
        }
        return newArr;
    }
}
