const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();
const indexOfWord = userText.indexOf(wordFromText);

console.log('Результат:', userText.slice(0, indexOfWord));