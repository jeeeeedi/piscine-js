function reverse(x) {
    if (typeof x === 'string') {
        let resultStr = '';
        for (let i = x.length - 1; i >= 0; i--) {
            resultStr += x[i];
        }
        return resultStr;
    } else if (Array.isArray(x)) {
        let resultArr = [];
        for (let i = x.length - 1; i >= 0; i--) {
            resultArr.push(x[i]);
        }
        return resultArr;
    }
}
