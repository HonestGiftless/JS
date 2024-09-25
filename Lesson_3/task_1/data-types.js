const age = 20;
const name = 'Nikita';
const hasDog = false;
const noneValue = null;
const undef = undefined;
const aboutPerson = {
    age: 20,
    name: 'Nikita',
    hasDog: false
};
const bigNum = 10n;
const id = Symbol('id');

console.log('age', age, typeof age);
console.log('name', name, typeof name);
console.log('hasDog', hasDog, typeof hasDog);
console.log('noneValue', noneValue, typeof noneValue);
console.log('undef', undef, typeof undef);
console.log('aboutPerson', aboutPerson, typeof aboutPerson);
console.log('bigNum', bigNum, typeof bigNum);
console.log('id', id, typeof id);