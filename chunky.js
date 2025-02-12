function chunk(arr, size) {
    let result = [];
    let subArr = [];
    for (let i = 0; i < arr.length;) {
        for (let j = i; j < size; j++) {
            subArr.push(arr[j]);
        }
        result.push(subArr);
        subArr = 0;
        if ((i += size) > arr.length) {
            i += size;
        } else {
            subArr = arr.slice(i, arr.length);
            result.push(subArr);
            break;
        }
    }

    return result;
}
