
function closeModal(modalSelector) {                             // функція Закриття модального
    const modal = document.querySelector(modalSelector);

    console.log(modalSelector);
    console.log(modal);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';                           // включаю скролінг сторінки         
}

function openModal(modalSelector, modalTimerId) {                            // функція Відкриття модального
    const modal = document.querySelector(modalSelector);

    console.log(modalSelector);
    console.log(modal);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';   // вирубаю скролінг сторінки

    console.log(modalTimerId);
    if (modalTimerId) {                      // перевір. запуск по таймеру
        clearInterval(modalTimerId);         // відключаєм таймер якщо є
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //! MODAL WINDOW

    const modalButtons = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalButtons.forEach(btn => {                               // показуєм модальне вікно при кліці на кнопку
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    // modalClose.addEventListener('click', () => {        // закриваєм модальне вікно по хрестику
    //     closeModal();
    // });

    modal.addEventListener('click', (evt) => {     // закриваєм модальне вікно по кліці за межами і хрестик
        if (evt.target === modal || evt.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (evt) => {       // закриваєм по кнопці Escape
        if (evt.code === "Escape" && modal.classList.contains('show')) {  // перевірка щоб не спрацьов. пості.    
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {                     // відкриття після прокрутки до кінця
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);     // видаляю показ після 1 разу
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

// module.exports = modal;   // старий спосіб експорту
export default modal;
export { openModal };
export { closeModal };
