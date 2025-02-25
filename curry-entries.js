function defaultCurry(obj1) {
    return function (obj2) {
        return Object.fromEntries(
            Object.entries(obj1)
                .concat(
                    Object.entries(obj2)));
    };
}

function mapCurry(func) {
    return function (obj) {
        return Object.fromEntries(
            Object.entries(obj)
                .map(([k, v]) => func([k, v])));
    };
}

function reduceCurry(func) {
    return function (obj, initVal = 0) {
        return Object.entries(obj)
            .reduce((acc, [k, v]) => func(acc, [k, v]), initVal);
    };
}

function filterCurry(func) {
    return function (obj) {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([k, v]) => func([k, v])));
    };
}

function reduceScore(personnel, initVal = 0) {
    let func = (acc, [k, v]) => acc + v.pilotingScore + v.shootingScore;
    return reduceCurry(func)(isForceUser(personnel), initVal);
}

function filterForce(personnel) {
    let func = (([k, v]) => v.shootingScore >= 80);
    return filterCurry(func)(isForceUser(personnel));
}

function mapAverage(personnel) {
    let func = ([k, v]) => [k, { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 }];
    return mapCurry(func)(personnel);
}

//helper func to get isForceUser: true
function isForceUser(personnel) {
    let func = (([, v]) => v.isForceUser === true);
    return filterCurry(func)(personnel);
}