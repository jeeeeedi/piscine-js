const clone1 = structuredClone(person);
const clone2 = structuredClone(person);

person.age += 1;
person.country = 'FR';
const samePerson = { ...person };