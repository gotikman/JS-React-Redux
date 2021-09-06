"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

// ! деструктуризація
const {border, bg} = options.colors;
console.log(border, bg);

// ! викликаю метод makeTest - функцію в середині обєкта!
options.makeTest();

// ! рахуєм довжину обєкта, кількість ключів
console.log(Object.keys(options).length);

// ! видалємь ключ name
delete options.name; 


let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`властивість -  ${i} має значення - ${options[key][i]} `);
            // counter++;
        }    
    } else {
        console.log(`властивість -  ${key} має значення - ${options[key]} `);
        counter++;
    }    
}
console.log(counter); 


