function modal() {
    //! MODAL WINDOW

    const modalButtons = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');

    function openModal () {                            // функція Відкриття модального
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';       // вирубаю скролінг сторінки
        clearInterval(modalTimerId);                   // відключаєм таймер
    }

    function closeModal() {                             // функція Закриття модального
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';               // включаю скролінг сторінки         
    }


    modalButtons.forEach( btn => {                        // показуєм модальне вікно при кліці на кнопку
        btn.addEventListener('click', openModal);
    });

   
    // modalClose.addEventListener('click', () => {        // закриваєм модальне вікно по хрестику
    //     closeModal();
    // });

    modalWindow.addEventListener('click', (evt) => {     // закриваєм модальне вікно по кліці за межами і хрестик
        if (evt.target === modalWindow || evt.target.getAttribute('data-close') == '') {           
            closeModal();
        }
    });

    document.addEventListener('keydown', (evt) => {       // закриваєм по кнопці Escape
        if (evt.code === "Escape" && modalWindow.classList.contains('show')) {    // перевірка щоб не спрацьовувало постійно      
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 5000);   // атоматичне відкриття модального

    function showModalByScroll() {                     // відкриття після прокрутки до кінця
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);     // видаляю показ після 1 разу
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;