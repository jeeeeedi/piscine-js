import { argv } from 'node:process';

let words = argv[2].split(" ");
let result = [];

words.forEach(word => {
  let mid = Math.ceil(word.length / 2);
  let newWord = word.slice(mid) + word.slice(0, mid);
  result.push(newWord);
})

console.log(result.join(' '));