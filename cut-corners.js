function round(x) {
    if (x === 0) {
        return 0;
    }
    if (x > 0) {
        if (x - trunc(x) >= 0.5) {
            return ceil(x);
        } else {
            return floor(x);
        }
    } else if (x < 0) {
        if (trunc(x) - x >= 0.5) {
            return floor(x);
        } else {
            return ceil(x);
        }
    }
}

function ceil(x) {
    if (x === 0) {
        return 0;
    }
    // For positive numbers
    if (x > 0) {
        let result = x;
        while (result >= 1) {
            result -= 1;  // Subtract 1 until the number is less than 1
        }
        return x - result + 1; // Adjust to round up to positive infinity
    }
    // For negative numbers
    else if (x < 0) {
        let result = x;
        while (result < -1) {
            result += 1;  // Add 1 until the number is greater than -1
        }
        return x - result; // Return integer part
    }
}

function floor(x) {
    if (x === 0) {
        return 0;
    }
    // For positive numbers
    if (x > 0) {
        let result = x;
        while (result >= 1) {
            result -= 1;  // Subtract 1 until the number is less than 1
        }
        return x - result; // Return integer part
    }
    // For negative numbers
    else if (x < 0) {
        let result = x;
        while (result < -1) {
            result += 1;  // Add 1 until the number is greater than -1
        }
        return x - result - 1; // Adjust to round down to negative infinity
    }
}

//truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.
function trunc(x) {
    if (x > 0xfffffffff || x < -0xfffffffff) {
        x -= 0xfffffffff
        if (x >= 0) {
            let result = x;
            while (result >= 1) {
                result -= 1;  // Subtract 1 until the number is less than 1
            }
            return x - result + 0xfffffffff; // Return integer part
        }
        // For negative numbers
        else {
            let result = x;
            while (result < -1) {
                result += 1;  // Add 1 until the number is greater than -1
            }
            return x - result + 0xfffffffff; // Return integer part
        }
    } else {
        // For positive numbers
        if (x >= 0) {
            let result = x;
            while (result >= 1) {
                result -= 1;  // Subtract 1 until the number is less than 1
            }
            return x - result; // Return integer part
        }
        // For negative numbers
        else {
            let result = x;
            while (result < -1) {
                result += 1;  // Add 1 until the number is greater than -1
            }
            return x - result; // Return integer part
        }
    }
}

console.log(trunc(0xfffffffff + Math.PI))
console.log(trunc(-0xfffffffff + Math.PI))