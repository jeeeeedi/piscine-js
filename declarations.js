const escapeStr = "`\\/\"'";
//console.log("`\\/\"'");

const arr = [4, "2"];

const obj = {
    str: "Hello World!",
    num: 100,
    bool: false,
    undef: undefined,
};

const nested = {
    arr: [4, undefined, "2"],
    obj: {
        str: "Hello World!",
        num: 100,
        bool: false,
    }
};

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);

/* console.log(Object.isFrozen(nested))
console.log(Object.isFrozen(arr))
console.log(Object.isFrozen(obj)) */