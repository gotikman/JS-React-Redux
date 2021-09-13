"use strict";

//?	Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5; alert( ++x );  
//! результат 5, томущо x++ спочатку виводить значення, потім плюсує  


//?	Чему равно такое выражение: [ ] + false - null + true ?
// let xx = [ ] + false - null + true ;
// console.log(xx); 
// console.log(typeof(xx)); 
//! результат NaN не матем. опер, [] як "" +(конкат) false = string 'false'- null = NaN


// let test = '10';
// let test2 = 5;
// let rez = test - test2;
// console.log(rez);
// console.log(typeof(rez));
// console.log(typeof(test));

// let test = NaN;
// let test2 = '5';
// let rez = test + test2;
// console.log(rez);
// console.log(typeof(rez));
// console.log(typeof(test));


//?	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1;
// let x = y = 2;
// alert(x);
//! рузультат 2


//?	Чему равна сумма [ ] + 1 + 2?
// let xxx = [ ] + 1 + 2;
// console.log(xxx);
//! результат 12, так як при конкатенації результат строка і елементи +

//?	Что выведет этот код: alert( "1"[0] )?
// alert( "98765"[2] );
//! результат = порядковому номеру в строці

//?	Чему равно 2 && 1 &&null&& 0 &&undefined ?
// let xxx = 2 && 1 &&null&& 0 &&undefined ;
// console.log(xxx);
// console.log(2 && 1 &&null&& 0 &&undefined);

//! результа null, операто && (це і це) запинається на брехні, та повертає перше значення брехні 


//?	Есть ли разница между выражениями? !!( a&& b ) и (a && b)?
// let ab  = !!( 1 && 2 );
// let abc = 1 && 0 ;
// console.log(!!( 1&& 2 ) === (1 && 2));
//! 1-е начення булеве, 2-е ні


//?	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// alert( null || 2  && 3 || 4 );
// && має приорітет на ||
// і запинається на брехні і повертає її значення
// або запинається на правді і повертає її значення
//! спочатку визначаєм приорітет операторів, де && рез 3, далі або запинається на 2 і все


// ?	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// let a = [1, 2, 3]; 
// let b = [1, 2, 3]; 
// if (a == b) {
//     console.log('рівні');
// } else {
//     console.log('не рівні');}
//! Значення не рівні тому що 2 масиви навіть при одинакових значення це 2 різних елементи


//?	Что выведет этот код: alert( +"Infinity" ); ?
// alert( +"Infinity" );
// const unar = +"Infinity";
// console.log(unar);
// console.log(typeof(unar));
//! результат Infinity так як унарний + робить Namber, але строка залишається

//?	Верно ли сравнение: "Ёжик" > "яблоко"?
// let anim1 = "Ёжик" ;
// let anim2 = "яблоко";
// if (anim1 > anim2) {
//     console.log("Ёжик більший");
// } else {
//     console.log("яблоко більше");
// }
//! яблоко більше так як в Unicod маленькі букви > за великі, і порів. йде посим.

//?	Чему равно 0 || "" || 2 || undefined || true || falsе ?
// let www = 0 || "" || 2 || undefined || true || falsе;
// console.log(www); 
//! Результат 2, так як || або-або затинається на першому ж "true"