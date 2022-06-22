"use strict";

let num = 50;

do {
   console.log(num);
   num++;
}
while (num < 55);


//!  Cicle in Cicle

// *
// **
// ***
// ****
// *****
// ******

// ----------------------------------

let result = '';
const lenght = 7;

for (let i = 0; i < lenght; i++) {
   for (let j = 0; j < i; j++) {
      result += '*';
   }

   result += "\n";
}

console.log(result);

//! --------------МІТКИ--------------------

first: for (let i = 0; i < 5; i++) {
   console.log(`first level: ${i}`);
   for (let j = 0; j < 5; j++) {
      console.log(`second level: ${j}`);
      for (let k = 0; k < 5; k++) {
         if (k === 2) continue first;
         console.log(`third level: ${k}`);
      }
   }
}
first: for (let i = 0; i < 5; i++) {
   console.log(`first level: ${i}`);
   for (let j = 0; j < 5; j++) {
      console.log(`second level: ${j}`);
      for (let k = 0; k < 5; k++) {
         if (k === 2) break first;
         console.log(`third level: ${k}`);
      }
   }
}

