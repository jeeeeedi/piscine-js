function slice(x, index, lastIndex) {
    if (index === undefined) {
        index = 0;
    }
    if (lastIndex === undefined) {
        lastIndex = x.length;
    }
    if ((typeof x === 'string' || Array.isArray(x)) && typeof index === 'number' && typeof lastIndex === 'number') {
        /* if (index >= x.length || lastIndex <= 0) {
            switch (x) {
                case Array.isArray(x):
                    return [];
                case (typeof x === 'string'):
                    return '';
            }
        } */
        if (index < 0) {
            index += x.length;
        }
        if (lastIndex < 0) {
            lastIndex += x.length;
        }
        if (Array.isArray(x)) {
            let resultArr = [];
            for (let i = index; i < lastIndex; i++) {
                resultArr.push(x[i]);
            }
            return resultArr;
        }
        if (typeof x === 'string') {
            let resultStr = '';
            for (let i = index; i < lastIndex; i++) {
                resultStr += x[i];
            }
            return resultStr;
        }
    }
}