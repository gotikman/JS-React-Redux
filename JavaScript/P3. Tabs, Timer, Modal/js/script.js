"use strict";

window.addEventListener('DOMContentLoaded', () => {

//! TABS

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items'); // повішаєм делегування
          
    //! ховаєм, обнуляєм усі таби
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none'; // скриваєм усі таби
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    //! показуєм потрібний контент згідно клацнутого таба
    function showTabContent(i = 0) {            // = 0 дефолтне значення сторінки
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    //! вішаєм делегування подій
    tabsParent.addEventListener('click', (evt) => {  
        const target = evt.target;       // створюєм щоб легше юзати надалі

        if(target && target.classList.contains('tabheader__item')) {  //перевіряєм кнопку
            tabs.forEach((item, i) => {    // перебираєм і шукаєм номер що клацнули
                if (target == item) {  //перевірка табнутого з перебираємим
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

//!TIMER

    const deadLine = '2021-10-19';             // задаєм кінцеву дату чрезез string

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),  // отримуєм загальну різницю в мілісек.
              days = Math.floor(t / (1000 * 60 * 60 * 24)),      // отримуєм дні
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),   // отримуєм години, залишок після .
              minutes = Math.floor((t / 1000 / 60) % 60),        // отримуєм хвилини, залишок після .
              seconds = Math.floor((t / 1000) % 60);             // отримуєм секунди, залишок після .

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {               //функція що добавляє "0" спереду якщо число < 10
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),     
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);   // оновлення таймера кожну 1 сек.

        updateClock();             //! викликаєм 1 раз щоб не було першої затримки в секунду

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);       // зупиняєм оновлення таймеру якщо вийшов час
            }
        }
    }

    setClock('.timer', deadLine);

//! MODAL WINDOW

    const modalButtons = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');

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

   
    modalClose.addEventListener('click', () => {        // закриваєм модальне вікно по хрестику
        closeModal();
    });

    modalWindow.addEventListener('click', (evt) => {     // закриваєм модальне вікно по кліці за межами
        if (evt.target === modalWindow) {           
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


});
