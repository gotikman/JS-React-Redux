"use strict";

try {
    console.log('Normal');      // виконується
    console.log(a);             // поломка, невідома змінна
    console.log('result');      // не виконується
} catch (error) {               //error - Обєкт помилки // код запускається при помилці
    console.log(error.name);   // назва помилки
    console.log(error.massege); // повідомлення помилки
    console.log(error.stack);   // стек функцій що привели до помилки
} finally {                     // код з даного  блоку виконується завжди

}

console.log('Still normal');       // продовжує працювати