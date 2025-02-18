function filterShortStateName(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(word => word.length < 7);
    }
}

function filterStartVowel(arr) {
    if (Array.isArray(arr)) {
        return arr.filter((el) => el.charAt(0).match(vowels));
    }
}

function filter5Vowels(arr) {
    if (Array.isArray(arr)) {
        return arr.filter((el) => (el.match(vowels) || []).length >= 5);
    }
}

function filter1DistinctVowel(arr) {
    if (Array.isArray(arr)) {
        return arr.filter((el) => {
            let matches = el.match(vowels) || [];
            let count = new Set(matches.map(v => v.toLowerCase()));
            return count.size === 1;
        });
    }
}

function multiFilter(arr) {
    if (Array.isArray(arr)) {
        return (((arr.filter(cap => cap.capital && cap.capital.length >= 8))
            .filter(n => !(n.name.charAt(0).toUpperCase()).match(vowels)))
            .filter(t => t.tag.match(vowels)))
            .filter(r => r.region !== 'South');
    }
}
const vowels = /[aeiouAEIOU]/g;
