
//! fn вираховує ширину правого скролу щоб відключати стрибання фону при відкритті модального
function calcWidthScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetHeight - div.clientWidth;    //? ширина прокрутки
    div.remove();

    return scrollWidth;

}

export default calcWidthScroll;