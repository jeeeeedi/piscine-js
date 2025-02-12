function DNA(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'C':
                result += 'G';
                break;
            case 'G':
                result += 'C';
                break;
            case 'A':
                result += 'T';
                break;
            case 'U':
                result += 'A';
                break;
        }
    }
    return result;
}

function RNA(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'G':
                result += 'C';
                break;
            case 'C':
                result += 'G';
                break;
            case 'T':
                result += 'A';
                break;
            case 'A':
                result += 'U';
                break;
        }
    }
    return result;
}
