"use strict";

const person = {
    name: 'Alex',
    tel: '+80964522585',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

//! Meтоди
console.log(JSON.stringify(person));  //? Перетворює обєкт JS у JSON для сервера
console.log(JSON.parse(JSON.stringify(person)));  //? Перетворює JSON в обєкт для JS 


const clone = JSON.parse(JSON.stringify(person));   //? КЛОН з усіма вложеностями
clone.parents.mom = 'Vira';
console.log(person);
console.log(clone);