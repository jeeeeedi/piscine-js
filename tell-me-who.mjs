import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
const filePath = argv[2] ? argv[2] : './';

try {
    const files = await readdir(filePath);
    let firstName = '';
    let lastName = '';
    let fullName = '';
    let names = [];
    for (const file of files) {
        fullName = file.slice(0, -5).split('_');
        firstName = fullName[0];
        lastName = fullName[1];
        names.push(`${lastName} ${firstName}`);
    }

    //sort
    let sorted = names.sort();

    //print line by line
    let count = 0;
    for (const name of sorted) {
        count++;
        console.log(`${count}. ${name}`);
    }

} catch (err) {
    console.error(err);
}