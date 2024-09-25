// length

const name = 'Nikita';
console.log(name.length);

// toUpperCase, toLowerCase
const animal = 'Dog';
console.log('upper', animal.toUpperCase());
console.log('lower', animal.toLowerCase());

// Найти символы - indexOf, includes
const text = 'Мой любимый язык программирования JavaScript';
console.log('indexOf', text.indexOf('JavaScript'));
console.log('includes', text.includes('JavaScript'));

// Обрезка строки - slice, substring
const programmingLanguage = 'JavaScript';
console.log('slice', programmingLanguage.slice(1, 4));
console.log('substring', programmingLanguage.substring(1, 4));

// Замена символов строки - replace, replaceAll
const programmingLanguage2 = 'JavaScript';
console.log('replace', programmingLanguage2.replace('Script', '*'));
console.log('replaceAll', programmingLanguage2.replaceAll('a', '*'));

// repeat
const helloText = 'hello';
console.log('repeat', helloText.repeat(3));

// trim
const nameOfUser = prompt('Введите имя пользователя');
console.log('nameOfUser', nameOfUser.trim());