"use strict";

const p = document.querySelectorAll('p');
console.log(p);

//! добавляєм та підключаєм скріптовий файл вручну

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;        //! відключаєм асинхронність, тепер по черзі
    document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/some.js');