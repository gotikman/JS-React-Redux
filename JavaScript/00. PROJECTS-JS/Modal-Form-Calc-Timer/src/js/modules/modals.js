import calcWidthScroll from './calcWidthScroll';               //* ширина скролу  

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcWidthScroll();                         //* ширина скролу

        //! вішаєм відкриття модального вікна на кнопки
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {                      // закриваєм Усі модальні вікна
                    item.style.display = 'none';
                })

                modal.style.display = "block";                  // відкриваєм потрібне
                document.body.style.overflow = "hidden";        // блокуєм фон
                // document.body.classList.add('modal-open')    // або блокуєм фон через клас
                document.body.style.marginRight = `${scroll}px` //* ширина скролу +
            });
        });

        //! закриваєм по кліку на Х
        close.addEventListener('click', () => {
            windows.forEach(item => {                           // закриваєм Усі модальні вікна
                item.style.display = 'none';
            })

            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open')      // або включаєм фон, видаливши клас що блокував
            document.body.style.marginRight = `0px`              //* ширина скролу -
        })

        //! закриваєм при кліку за межами
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {      // Overlay - перевірка потрібно так закривати
                windows.forEach(item => {                       // закриваєм Усі модальні вікна
                    item.style.display = 'none';
                })

                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open')
                document.body.style.marginRight = `0px`          //* ширина скролу -
            }
        })
    }

    //! відкриваєм після 30 сек.
    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";             // відключаю скрол фонового контенту
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('[data-popup]', 30000)
};

export default modals;