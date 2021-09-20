"use strict";

//! ClassList
const btns = document.querySelectorAll('button');      

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red' , 'second'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));


// if (btns[1].classList.contains('red')) {
//     console.log('є клас такий');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');  // те саме що код вище
});

//! Делегування подій від батька вложеним елементам, динамічне!

// батьківський елемент кнопок
const wrapper = document.querySelector('.btn-block'); 

// перевірка чи клік по кнопці, тег <button>
wrapper.addEventListener('click', (evt) => {
    if (evt.target && evt.target.tagName == "BUTTON") {   // +evt.target реком.гугла
        console.log(evt.target);
        console.dir(evt.target);
    }
});

// динамічно добавляєм елемент в батька щоб провірити
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


//? перевірка чи клік по кнопці з класом "blue"
wrapper.addEventListener('click', (evt) => {
    if (evt.target && evt.target.classList.contains('blue')) {   //! classList.contains('blue') - якщо містить
        console.log('contains blue');
    }
});


wrapper.addEventListener('click', (evt) => {
    if (evt.target && evt.target.matches('button.red')) {  //! matches('button.red') - якщо містить
        console.log('matches  = button + blue');
    }
});