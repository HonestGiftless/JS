// 1.
console.log(String(console.log), Number(console.log), Boolean(console.log));
// function log() { [native code] }, NaN, true

// 2.
console.log(String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));
// [object Object], NaN, true

// 3.
console.log(String(Symbol('key')), Boolean(Symbol('key')));
// Symbol(key), true

// 4.
console.log(String(Number), Number(Number), Boolean(Number));
// function Number() { [native code] }, NaN, true

// 5.
console.log(String(''), Number(''), Boolean(''));
// , 0, false

// 6.
console.log(String(0), Number(0), Boolean(0));
// 0, 0, false

// 7.
console.log(String(-10), Number(-10), Boolean(-10));
// -10, -10, true

// 8.
console.log(String('-105'), Number('-105'), Boolean('-105'));
// -105, -105, true