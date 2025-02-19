function forEach(arr, fn) {
    if (Array.isArray(arr)) {
        let newarr = [];
        for (let i = 0; i < arr.length; i++) {
            newarr.push(fn(arr[i]));
        }
        return newarr;
    }
}
