"use strict";

if (4 == 9) {
    console.log("ok!")  
} else {
    console.log("Error");
} 

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
}  else {
    console.log('ok!');
}
// _____________________

// !  тернарний оператор '?'
(num === 50)  ? console.log('ok!') : console.log('Error');

// _____________________

// ! switch, використовується тілкьи при строгому порівнянні
const num2 = 51;

switch (num2) {
    case 49:
        console.log('Wrong');
        break;
    case 100:
        console.log('Wrong');
        break;
    case 50:
        console.log('Wrong');
        break;
    default: 
        console.log('Не в цей раз:)');
}