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


//! CLASS для створення нових карточок 

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;                                //! буде масив
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changToUAH();                           // котвертуєм price з дол в грн
        }

        changToUAH() {
            this.price = this.price * this.transfer;      // міняє на льоту дол в грн  
        }

        render() {                                          //! метод добавлення new cards
            const element = document.createElement('div');   // створюю віртуальний div      
 
            if (this.classes.length === 0) {
                this.classes = 'menu__item';                //! перезаписую пустий масив ???
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className)); //! Добавляєм залишкові rest класи
            }

            element.innerHTML = `                         
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>                
            `;
            this.parent.append(element);
        }
    }

    // const newCard = new MenuCard();     // стандартний спосіб створення
    // div.render();

    new MenuCard(                 //! спосіб створення обєкт. якщо нам потрібно викор. 1 раз
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        // 'menu__item',
        // 'big'

    ).render();         

    new MenuCard(                
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан! Меню “Премиум” - приходи, убедись',
        15,
        '.menu .container',
        'menu__item'

    ).render();        

    new MenuCard(                 
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        12,
        '.menu .container',
        'menu__item'

    ).render();             

//! ВІДПРАВКА ДАНИХ З ФОРМ НА СЕРВЕР
// 2 форми в нас і відповідно обробника тому обернемо у функцію яку будем викликати при відправки форми
    
    const forms = document.querySelectorAll('form');   // Отримуєм форму

    const message = {                                    //! обєкт для виводу користувачу повідомлень
        loading: 'img/form/spinner.svg',
        success: 'Дякую! Незабаром ми з Вами звяжимось',
        failure: 'Упс! Щось пішло не так...'
    };

    forms.forEach(item => {                         //! Вішаєм функцію на усі форми
        postData(item);
    });

    function postData(form) {                        // функція що будем викликати при відправці форми
        form.addEventListener('submit', (evt) => {   // вішаєм подію - відправка форми
            evt.preventDefault();

            const statusMessage = document.createElement('img');  //!змінна для повідомлень користувач
            statusMessage.src = message.loading;                  // спінер
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                `;
                                
            form.insertAdjacentElement('afterend', statusMessage);       
    
            const formData = new FormData(form);      //! створюєм обєкт FD в який буде приходити форма що передали

            //! FormData конвертуєм в JSON
            const object = {};    // Обєкт для заливки з FormData
            formData.forEach(function(value, key) {
                object[key] = value;
            });     
            

            fetch('server.php', {                      //! Відправка на сервер
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object),
            })
            .then(data => data.text())                //! метод КОНВЕРТУЄМ ОТРИМАНІ ДАНІ для перегляду 
            .then(data => {                           //! код у позитивному випадку
                console.log(data);                           
                showThanksModal(message.success);                   
                statusMessage.remove();                // видаляєм повідомлення
            }).catch(() => {                           //! код у випадку помилки
                showThanksModal(message.failure);
            }).finally(() => {                         //! код у будь-кому випадку
                form.reset();                           // Очищаєм форму 
            });

        });
    }

    //! функція показу нового вікна оповіщення для користувача
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');  // використовуєм готове вікно

        prevModalDialog.classList.add('hide');  // сховали стандартне вікно
        openModal();                            // підвязуєм відкриття  нового вікна

        const thanksModal = document.createElement('div');  // створюєм div
        thanksModal.classList.add('modal__dialog');         // вішаєм стилі модального вікна
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title"> ${message} </div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);   // добавляєм створений елемент
        setTimeout(() => {
            thanksModal.remove();                        // видаляєм вспливаюче наше повідомленння
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

//! Настройка JSON-server
    fetch('http://localhost:3000/menu')     // отримуєм доступ до бази
        .then(data => data.json())          // перетворюю в звичайни обєкт JS, масив обєктів
        .then(res => console.log(res)); 

});
