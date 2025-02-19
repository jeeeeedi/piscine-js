function every(arr, fn) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            fn(arr[i]) ? newArr.push(arr[i]) : null;
        }
        return arr.length === newArr.length ? true : false;
    }
}

function some(arr, fn) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            fn(arr[i]) ? newArr.push(arr[i]) : null;
        }
        return newArr.length > 0 ? true : false;
    }
}

function none(arr, fn) {
    if (Array.isArray(arr)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            fn(arr[i]) ? newArr.push(arr[i]) : null;
        }
        return newArr.length === 0 ? true : false;
    }
}
