let myAge = 20;
let myName = 'Nikita';
let hasDog = false;
let noneValue = null;
let undefValue = undefined;
let myData = {
    myAge: 20,
    myName: 'Nikita'
};
let bigNumber = 10n;
let id = Symbol('id');

console.log(Number(myAge), Boolean(myAge), String(myAge));
console.log(Number(myName), Boolean(myName), String(myName));
console.log(Number(hasDog), Boolean(hasDog), String(hasDog));
console.log(Number(noneValue), Boolean(noneValue), String(noneValue));
console.log(Number(undefValue), Boolean(undefValue), String(undefValue));
console.log(Number(myData), Boolean(myData), String(myData));
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));
console.log(Boolean(id), String(id));