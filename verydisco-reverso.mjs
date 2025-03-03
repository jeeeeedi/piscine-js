//reading
import { argv } from 'node:process';
import { readFile } from 'node:fs/promises';

try {
    const filePath = argv[2];
    const contents = await readFile(filePath, { encoding: 'utf8' });

    //reversing
    let words = contents.split(' ');
    let result = [];
    words.forEach(w => {
        let mid = Math.floor(w.length / 2);
        let origWord = w.slice(mid) + w.slice(0, mid);
        result.push(origWord);
    })

    console.log(result.join(' '));

} catch (err) {
    console.error(err.message);
}

