let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
const middleIndex = Math.floor(javaScriptDescription.length / 2);

javaScriptDescription = javaScriptDescription.slice(0, middleIndex);
javaScriptDescription = javaScriptDescription.replaceAll('а', 'А');
javaScriptDescription = javaScriptDescription.replaceAll(' ', '');
javaScriptDescription = javaScriptDescription.repeat(3);

console.log(javaScriptDescription[Math.floor(javaScriptDescription.length / 2)]);
console.log(javaScriptDescription);