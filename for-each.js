function forEach(arr, fn) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            fn(arr[i], i, arr);
        }
    }
}
