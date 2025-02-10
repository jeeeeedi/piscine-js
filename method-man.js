//words: that takes a string, splits it by spaces, and returns an array of those substrings.
//A string can be converted to an array with the split() method
function words(w) {
    return w.split(" ");
}


//sentence: that takes an array of strings, and joins them with spaces to return a single string.
//concat() joins two or more strings
function sentence(s) {
    return s.join(" ");
}

//yell: that takes a string and returns it in upper case.
function yell(y) {
    return y.toUpperCase();
}

//whisper: that takes a string and returns it in lower case, surrounded by *.
function whisper(wh) {
    return ("*" + wh.toLowerCase() + "*");
}

//capitalize: that takes a string and transforms it so that the first character is upper case, and the subsequent characters are lower case.
function capitalize(c) {
    return c[0].toUpperCase() + c.slice(1).toLowerCase();
}

//console.log(capitalize('STR'));