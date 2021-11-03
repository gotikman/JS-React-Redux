
//? В кожної сущності повинне бути своє імя щоб можна експортнути


//! Експорт спосіб 1
// експорт змінної
export let one = 1;

// експорт функції
export function sayHi() {              
    console.log('Hello');
}

//! Експорт спосіб 2
let two = 2;
let three = 3;

export { two };
export { three };

//! Eкспорт спосіб 3
export default function sayBye() {     // може бути тільки 1
    console.log('Bye-bye!!!');
}