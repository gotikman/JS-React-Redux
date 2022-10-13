'use strict';


//? MutationObserver - дозволяє відслідковувати змінни на елементі HTML
//? MutationObserver - спрацьовує тільки після змін
//? MutationObserver - дана операція асинхронна тому може виконатися пізніше
//? MutationObserver - результат - [масив] усіх змін


const box = document.querySelector('.box');

// observes the changes
let observer = new MutationObserver(MutationRecord => {
    console.log(MutationRecord);
});

observer.observe(box, {
    childList: true
})

observer.disconnect();              //! відключаєм спостерігач за змінами