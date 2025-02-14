function vowelDots(s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(vowels)) {
            result += s[i] + '.';
        } else {
            result += s[i];
        }
    }
    return result;
}

const vowels = /[aeiou]/; // Brackets /[abc]/ specifies matches for any of the characters a, b, or c
