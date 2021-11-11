"use strict";

function* generator() {      // функція генератор
    yield 'S';
    yield 'c';               //! yield - ключове слово, задаєм варіанти генератора
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();       // присвоюєм функцію генератор

console.log(str.next());         //! next - метод виклику наступного кроку
console.log(str.next());
console.log(str.next().value);   //! value- отримуєм значення
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

// ___________________________________

function* count(n) {
    for (let i = 0; i < n; i++) {   //цикл буде спрацьвувати 1 раз при виклику
        yield i;
    }
}

const counter = count(7);

console.log(counter.next().value);   // кожного разу новий результат
console.log(counter.next().value);
console.log(counter.next().value);

// ___________________________________
function* count2(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count2(7)) {       // for of - цикли якщо потрібно запустити фун. баг. раз
    console.log(k);
}



//* моя практика
function* genMe() {
    yield 'One';
    yield 'Two';
}
const gen = genMe();

console.log(gen.next());          // { value: 'One', done: false }
console.log(gen.next().value);    // Two
console.log(gen.next());          // { value: undefined, done: true }


