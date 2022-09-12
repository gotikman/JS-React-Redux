'use strict';

const boxesQuery = document.querySelectorAll('.box');         // статична + methods
const boxesGet = document.getElementsByClassName('box');      // жива     - methods

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}

console.log(boxesQuery);                                 // статична колекція + 2 метода
console.log(boxesGet);                                   // жива колекція але без методів
console.log(Array.from(boxesGet));                       //! статична але з методами

//? ---------------- *.matches(*) ----------------------

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box);
})

//? ---------------- *.closest(*) ----------------------

console.log(boxesQuery[2].closest('.wrapper'));          // повертає ближній батьківський елемент
