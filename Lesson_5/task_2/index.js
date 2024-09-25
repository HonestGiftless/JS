const myName = 'Nikita';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Nikita';
const reasonText = 'I like it';
const numberOfMonth = '2';

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.\nЯ хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`;
myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);