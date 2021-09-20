"use strict";

//! Події
//? touchstart     спрацьовує при кліку на елемент
//? touchmoove     палець при кліку починає рухатися
//? touchend       палець відірвався від елемента

//? touchenter     спрацюьовує коли ведем палець і налазимо на елемент
//? touchleave     спрацьовує коли вдем палець i злaзимо з елемента
//? touchcancel    спрацьовує коли точка дотику більше не реєструється на поверхні

//! Властивості
//? touches         видає TouchList загальний - кількість пальців, координати, елемент
//? targetTouches   видає TouchList елемента - к-ть пальців, координати
//? changedTouches  видає TouchList пальців(ця) що спричинили подію

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (evt) => {
        evt.preventDefault();

        console.log("start");
        console.log(evt.targetTouches);       
    });

    box.addEventListener('touchmove', (evt) => {
        evt.preventDefault();

        console.log('move');
        console.log(evt.targetTouches[0].pageX); //! відслідковування 1 пальця
    });

    box.addEventListener('touchend', (evt) => {
        evt.preventDefault();

        console.log("End");
    });
});

