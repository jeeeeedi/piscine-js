//split that works like String.split, but takes the string as its first argument.
function split(str, sep) {
    if (str === '') {
        return [''];
    }

    let result = [];
    let current = '';
    let i = 0;

    if (sep === '') {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    while (i < str.length) {
        if (str.slice(i, i + sep.length) === sep) {
            result.push(current);
            current = '';
            i += sep.length;
        } else {
            current += str[i];
            i++;
        }
    }
    result.push(current);
    return result;
}


//join that works like Array.join, but take the array as its first argument.
function join(arr, sep) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += sep;
        }
    }
    return result;
}