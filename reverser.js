function reverse(x) {
    if (typeof x === 'string') {
        resultStr = '';
        for (let i = x.length - 1; i >= 0; i--) {
            resultStr += x[i];
        }
        return resultStr;
    } else if (Array.isArray(x)) {
        resultArr = [];
        for (let i = x.length - 1; i >= 0; i--) {
            resultArr.push(x[i]);
        }
        return resultArr;
    }
}
