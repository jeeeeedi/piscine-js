function filterKeys(obj, condition) {
    return Object.fromEntries( //converts array back into an object.
        Object.entries(obj) //converts obj into an array of key-value pairs
            .filter(([k, v]) => condition(k)));  // Filter based on condition
}

function mapKeys(obj, condition) {
    return Object.fromEntries(
        Object.entries(obj)
            .map(([k, v]) => [condition(k), v]));
}

function reduceKeys(obj, condition, i) {
    return Object.keys(obj)
        .reduce((a, c) => a + c,
            (i ? i : 0));
}


//TESTS

// small database with nutrition facts, per 100 grams
// prettier-ignore
const nutritionDB = {
    tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
    vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
    oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
    onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
    garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
    sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
    orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 12, fiber: 0.2, fat: 0.1 },
}


const cart = {
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4,
}
const filtered = { sugar: 100, oil: 50, onion: 200, garlic: 22 }
const mapped = {
    '✔️vinegar': 80,
    '✔️sugar': 100,
    '✔️oil': 50,
    '✔️onion': 200,
    '✔️garlic': 22,
    '✔️paprika': 4,
}
const combo = {
    tomatoDB: {
        calories: 18,
        protein: 0.9,
        carbs: 3.9,
        sugar: 2.6,
        fiber: 1.2,
        fat: 0.2,
    },
}
// /*/ // ⚡
console.log(filterKeys(cart, (k) => k.length <= 6))//        filtered,
console.log(filterKeys(cart, (k) => /onion/.test(k)))//,         { onion: 200 },

// map keys
console.log(mapKeys(cart, (k) => `✔️${k}`))//,        mapped,
console.log(mapKeys(filterKeys(cart, (k) => k === 'onion'), (k) => (k = 'orange')))//        { orange: 200 },
console.log(mapKeys(filterKeys(nutritionDB, (k) => k === 'tomato'), (k) => `${k}DB`)) //        combo,

// reduce keys
console.log(reduceKeys(cart, (acc, cr) => acc.concat(', ', cr)))//        'vinegar, sugar, oil, onion, garlic, paprika',
console.log(reduceKeys(cart, (acc, cr) => `${acc}${cr}:`, ':'))//        ':vinegar:sugar:oil:onion:garlic:paprika:',

const join = (acc, cr) => (acc == null ? cr : `${acc}:${cr}`)
console.log(reduceKeys(nutritionDB, join, null))//        'tomato:vinegar:oil:onion:garlic:paprika:sugar:orange',
console.log(reduceKeys(cart, join, undefined))//        'vinegar:sugar:oil:onion:garlic:paprika',
console.log(reduceKeys(cart, (acc, cr) => (acc += (cr.length <= 4) & 1), 0))//        1,
