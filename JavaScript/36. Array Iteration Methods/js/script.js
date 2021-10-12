"use strict";

//! filter
// перебирає та фільтрує елементи в новий масив по заданому правилі

const names = ['Ivan', 'Ann', 'Ruslan', 'Vova'];

const shortNames = names.filter((name) => {
    return name.length < 5;                   // результат = новий масив де імя<5 символів
});

console.log(shortNames);

//! map
// перебирає та трансформує!!! дані в новий масив
const answer = ['Ivan', 'ANNa', 'HellO'];

const result = answer.map(item => item.toLowerCase());   // робить маленькі букви

console.log(result);

//! every/some
// some - повертає true, якщо хочаб 1 елемент масиву підходить по правилу
// every - повертає true, якщо усі елементи масиву підходять по правилу
const mass = [4, 'qwerty', 'www'];

console.log(mass.some(item => typeof(item) === 'number')); //перевірка на наявність числа
console.log(mass.every(item => typeof(item) === 'number')); //перевірка на наявність всіх чисел

//! reduce
// схлопує, збирає масив в одно єдине ціле, сумує
// функція приймає 2 аргументи: sum - сума, стартує з 0, current - поточне значення
// метод може приймати 2-й аргумент що задає початкове значення для sum
const arr = [4, 6, 6, 7, 2, 8];
                    //   0      4
                    //   4      10
                    //   10     16
                    //   16     23 
// const res = arr.reduce((sum, current) => sum + current);
const res = arr.reduce((sum, current) => sum + current, 3);  
console.log(res);

//? reduce для тексту
const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

//! Практика
const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)       //! перетврюєм в масив
.filter(item => item[1] === 'person')      //! фільтруєм персони
.map(item => item[0]);                    //! витягуєм 1 значення, трансформуєм

console.log(newArr);




