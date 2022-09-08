'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');  //* елементу нема в html

console.log(block);                              // =>> null

// стандартна провірка на true-false, код піде далі
if (block) {
    console.log(block.textContent);
}


// console.log(block.textContent);        //! =>> error, код зупиниться    
console.log(block?.textContent);          //? =>> undefined , код іде далі
//-----------------------------------------------------------------------

const userData = {
    name: 'Ivan',
    age: null
}

// стандартна провірка на true-false, код піде далі
if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}

// console.log(userData.skills.js);        //! =>> error, код зупиниться   
console.log(userData?.skills?.js);         //? =>> undefined , код іде далі

//-----------------------------------------------------------------------
const userData2 = {
    name: 'Ivan',
    age: null,
    say: function () {
        console.log('Hello');
    }
}

userData2.say();                          // =>> Hello
// userData2.hay();                       //! =>> error, код зупиниться   
userData2.hay?.();                        //? код іде далі


//-----------------------------------------------------------------------
console.log(1 + 2);
