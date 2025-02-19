function every(arr, fn) {
    if (Array.isArray(arr)) {
        arr.sort();
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                return true;
            }
        }
        return false;
    }
}

function some(arr, fn) {
    if (Array.isArray(arr)) {
        arr.sort();
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                return true;
            }
        }
        return false;
    }
}

function none(arr, fn) {
    if (Array.isArray(arr)) {
        arr.sort();
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                return false;
            }
        }
        return true;
    }
}
