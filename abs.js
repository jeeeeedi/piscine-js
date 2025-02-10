//Create a function named isPositive that takes a number as a argument, returning true if the number is strictly positive, and false otherwise.
function isPositive(num) {
    return typeof num === "number" && num > 0;
}

//Create a function named abs that takes a number as an argument and returns its absolute value. You must make your own implementation. You must not use Math.abs().
function abs(n) {
    if (typeof n === "number" && n > 0) {
        return n;
    }
    if (typeof n === "number" && n < 0) {
        return n * (-1);
    }
    if (typeof n === "number" && n === null) {
        return 0;
    }
    if (typeof n === "number" && n === "") {
        return 0;
    }
    if (typeof n === "number" && n === 0) {
        return 0;
    }
}