function multiply(a, b) {
    let result = 0;
    if (typeof a != 'number' && typeof b != 'number') {
        return 0;
    }
    switch (typeof a === 'number' && typeof b === 'number') {
        case (a === 0 || b === 0):
            return 0;

        case (a < 0 && b < 0):
            a = -a;
            b = -b;
            for (i = 0; i < b; i++) {
                result += a;
            }
            return result;

        case (a < 0 && b > 0):
            a = -a;
            for (i = 0; i < b; i++) {
                result += a;
            }
            return -result;

        case (b < 0 && a > 0):
            b = -b;
            for (i = 0; i < b; i++) {
                result += a;
            }
            return -result;

        default /* (a >= 0 || b >= 0) */:
            for (i = 0; i < b; i++) {
                result += a;
            }
            return result;

    }

}

function divide(a, b) {
    let result = 0;
    if (typeof a != 'number' && typeof b != 'number') {
        return 0;
    }
    switch (typeof a === 'number' && typeof b === 'number') {
        case (a === 0 || b === 0):
            return 0;

        case (a < 0 && b < 0):
            a = -a;
            b = -b;
            while (a >= b) {
                a -= b;
                result++;
            }
            return result;

        case (a < 0 && b > 0):
            a = -a;
            while (a >= b) {
                a -= b;
                result++;
            }
            return -result;

        case (b < 0 && a > 0):
            b = -b;
            while (a >= b) {
                a -= b;
                result++;
            }
            return -result;

        default /* (a >= 0 || b >= 0) */:
            while (a >= b) {
                a -= b;
                result++;
            }
            return result;

    }
    
}

function modulo(a, b) {
    if (typeof a != 'number' && typeof b != 'number') {
        return 0;
    }
    switch (typeof a === 'number' && typeof b === 'number') {
        case (a === 0 || b === 0):
            return 0;

        case (a < 0 && b < 0):
            a = -a;
            b = -b;
            while (a >= b) {
                a -= b;
            }
            return -a;

        case (a < 0 && b > 0):
            a = -a;
            while (a >= b) {
                a -= b;
            }
            return -a;

        case (b < 0 && a > 0):
            b = -b;
            while (a >= b) {
                a -= b;
            }
            return a;

        default /* (a >= 0 || b >= 0) */:
            while (a >= b) {
                a -= b;
            }
            return a;

    }
}
