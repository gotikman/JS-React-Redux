const btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);    //* функ. приймаэ 1 аргум. саму функц.
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));  //* анонiмна функц.

//! Зупинка анімації
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);