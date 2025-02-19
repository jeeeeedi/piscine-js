//mult2: that multiplies two numbers.
function mult2(a) {
    return function (b) {
        return a * b;
    }
}

//add3: that adds three numbers.
function add3(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

//sub4: that subtracts four numbers in the given order: first number minus second number etc.
function sub4(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a - b - c - d;
            }
        }
    }
}