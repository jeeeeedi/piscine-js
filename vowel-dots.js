function vowelDots(s) {
    let result = '';
    let vowels = /[aeiou]/; // Brackets /[abc]/ specifies matches for any of the characters a, b, or c

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(vowels)) {
            result += s[i] + '.';
        } else {
            result += s[i];
        }
    }
    return result;
}
