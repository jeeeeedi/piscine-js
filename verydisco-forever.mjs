//verydisco-ing
import { argv } from 'node:process';

let words = argv[2].split(" ");
let result = [];

words.forEach(word => {
    let mid = Math.ceil(word.length / 2);
    let newWord = word.slice(mid) + word.slice(0, mid);
    result.push(newWord);
})

result = result.join(' ');


//writing to file
import { writeFile } from 'node:fs/promises';
async function saveFile() {
    try {
        await writeFile('verydisco-forever.txt', result);
        console.log('File written successfully!');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

saveFile();
