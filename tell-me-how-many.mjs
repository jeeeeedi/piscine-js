import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
const filePath = argv[2] ? argv[2] : './';

try {
    const files = await readdir(filePath);
    let count = 0;
    for (const file of files)
        count++;
    console.log(count);
} catch (err) {
    console.error(err);
}