"use strict";

const app  = '123'; 

const number = 1;


//! модуль зі своєю областю бачення
(function(){                        //! Анонімна самовизивающа функція
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

//! обєктний інтерфейс, модуль записуєм в змінну
const user = (function(){            //! Анонімна самовизивающа функція
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();

