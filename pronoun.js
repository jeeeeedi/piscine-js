function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    let words = str.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/); //deal with \n and ' '

    const obj = {};

    for (let i = 0; i < words.length; i++) {
        if (pronouns.includes(words[i])) {
            if (!obj[words[i]]) { //init array
                obj[words[i]] = { word: [], count: 0 };
            }

            // If there's a next word and it's not a pronoun, add it
            if (words[i + 1] && !pronouns.includes(words[i + 1]) && !obj[words[i]].word.includes(words[i + 1])) {
                obj[words[i]].word.push(words[i + 1]);
            }

            // Increment count
            obj[words[i]].count += 1;
        }
    }
    return obj;
}