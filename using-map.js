//citiesOnly: accepts an array of objects and returns an array of strings from the city key.
function citiesOnly(arr) {
    if (Array.isArray(arr)) {
        return arr.map(cities => cities.city);
    }
}

//upperCasingStates: accepts an array of strings, and returns a new array of strings. The returned array will be the same as the argument, except the first letter of every word must be capitalized.
function upperCasingStates(arr) {
    if (Array.isArray(arr)) {
        return arr.map((element) => element.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' '));
    }
}

//fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. Round down the result.
function fahrenheitToCelsius(arr) {
    if (Array.isArray(arr)) {
        return arr.map((element) =>
            Math.floor((Number(element.slice(0, element.length - 2)) - 32) / 1.8)
                .toString() + '°C');
    }
}

//trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. The temperature strings must have their spaces removed in the new array.
function trimTemp(arr) {
    if (Array.isArray(arr)) {
        return arr.map((element) => ({
            ...element, ["temperature"]:
                element.temperature.trim().split(' ').join('')
        }));
    }
}

//tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:
function tempForecasts(arr) {
    if (Array.isArray(arr)) {
        return arr.map((element) => (
            `${Math.floor(((Number((
                element.temperature.trim().split(' ').join(''))
                .slice(0, ((element.temperature.trim().split(' ').join('')).length - 2)))
                .toString()) - 32) / 1.8)
            }°Celsius in ${element.city}, ${(element.state).split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')
            }`));

    }
}
