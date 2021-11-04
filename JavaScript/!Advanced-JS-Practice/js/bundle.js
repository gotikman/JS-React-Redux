/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    //! Калькулятор

    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {        //! підтягуєм LC
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';                        // дефолт
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {        //! підтягуєм LC
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;                        // дефолт
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSetting(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        //! Наздачаєм автоматичний вибір пунктів з LC
        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSetting('#gender div', 'calculating__choose-item_active');
    initLocalSetting('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {

        if (!sex || !height || !weight || !age || !ratio) {   //!перевірка на активність пунктів
            result.textContent = '____';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);

        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {                            // навішуєм слух. події
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')); //! LC
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));  //! LC
                }

                elements.forEach(elem => {                // відключаєм вибраність
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);       // включаєм вибраність спрацьованому

                calcTotal();
            });
        });

    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    //! функція для полів вводу, отримуєм дані
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {            // провірка на цифри
                input.style.border = '1px solid red';  // підсвічуєм червоним
            } else {
                input.style.border = 'none';
            }


            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();                        // перераховуєм при кожній зміні в полях
        });


    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

// module.exports = calc;   // старий спосіб експорту
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function cards() {
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



    //! fetch \ заливаємо карточки з сервера на сайт  
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')   // запускаєм функцію з адресом наших карток
        .then(data => {
            data.forEach(({ img, altimg, title, descr, price }) => {   // реструктуризуєм обєкт картки
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    //! AXIOS заливка карточки з сервера на сайт бібл.  
    //   axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price}) => {   // реструктуризуєм обєкт картки
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();    
    //         });
    //     });

}

// module.exports = cards;   // старий спосіб експорту
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(formSelector, modalTimerId) {
    //! ВІДПРАВКА ДАНИХ З ФОРМ НА СЕРВЕР
    // 2 форми в нас і відповідно обробника тому обернемо у функцію яку будем викликати при відправки форми

    const forms = document.querySelectorAll(formSelector);   // Отримуєм форму

    const message = {                               // обєкт для виводу користувачу повідомлень
        loading: 'img/form/spinner.svg',
        success: 'Дякую! Незабаром ми з Вами звяжимось',
        failure: 'Упс! Щось пішло не так...'
    };

    forms.forEach(item => {                       // Вішаєм функцію на усі форми
        bindPostData(item);
    });


    function bindPostData(form) {                  // функція що будем викликати при відправці форми
        form.addEventListener('submit', (evt) => {   // вішаєм подію - відправка форми
            evt.preventDefault();

            const statusMessage = document.createElement('img');  //!змінна для повідомлень користувач
            statusMessage.src = message.loading;                  // спінер
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                `;

            form.insertAdjacentElement('afterend', statusMessage);

            //! створюєм обєкт FD в який буде приходити форма що передали
            const formData = new FormData(form);

            //! FormData конвертуєм в JSON
            const object = {};    // Обєкт для заливки з FormData
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            //!альтернативний варіант FormData --> JSON
            // const json = JSON.stringify(Object.fromEntries(formData.entries()));

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', JSON.stringify(object))
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
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);                           // підвязуєм відкриття  нового вікна

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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);
    }
}

// module.exports = forms;  // старий спосіб експорту
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function slider({ container, slide, nextArrow, prevArrow, totalCounter,
    currentCounter, wrapper, field }) {

    //! СЛАЙДЕР prof
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector(field);

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    function addZeroCurrent() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function dotsOpacity() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    //! слайди в ряд
    slidesField.style.width = 100 * slides.length + '%';  // ширина обгортки * к-ть слайд \400%
    slidesField.style.display = 'flex';                   // слайди в ряд
    slidesField.style.transition = '0.5s all';            // перехід

    slidesWrapper.style.overflow = 'hidden';              // обрізаєм інші слайди

    slides.forEach(slide => {
        slide.style.width = width;
    });

    //! створюю точки слайдера
    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');

    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);              // добавляю в масив кожну точку
    }

    //! вішаю події на кнопки next/prev

    function deleteNotDigits(str) {          // функція отримання цифр без "px"
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        // width = '500px', треба чисте число, тому обрізаєм
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        addZeroCurrent();
        dotsOpacity();
    });

    prev.addEventListener('click', () => {
        // width = '500px', треба чисте число, тому обрізаєм
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        addZeroCurrent();
        dotsOpacity();

    });

    // клікабельність дотсів слайдера
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            addZeroCurrent();
            dotsOpacity();
        });
    });

}

// module.exports = slider; // старий спосіб експорту
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //! TABS

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector); // повішаєм делегування

    //! ховаєм, обнуляєм усі таби
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none'; // скриваєм усі таби
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    //! показуєм потрібний контент згідно клацнутого таба
    function showTabContent(i = 0) {            // = 0 дефолтне значення сторінки
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    //! вішаєм делегування подій
    tabsParent.addEventListener('click', (evt) => {
        const target = evt.target;       // створюєм щоб легше юзати надалі

        if (target && target.classList.contains(tabsSelector.slice(1))) {  //перевіряєм кнопку, вирізаєм "."
            tabs.forEach((item, i) => {    // перебираєм і шукаєм номер що клацнули
                if (target == item) {  //перевірка табнутого з перебираємим
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

//! CommonJS, експортуєм функцію
// module.exports = tabs;   // старий спосіб експорту
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function timer(id, deadLine) {

    // const deadLine = '2021-12-19';             // задаєм кінцеву дату чрезез string

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

    //функція що добавляє "0" спереду якщо число < 10
    function getZero(num) {
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

    setClock(id, deadLine);

}

// module.exports = timer;  // старий спосіб експорту
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
//!Функція постим дані з форми
const postData = async (url, data) => {
    const res = await fetch(url, {          // чекаєм і отримуєм promise дані по запросу
        method: "POST",
        headers: {
            'Content-type': 'application/json'  // настройки POST
        },
        body: data
    });

    return await res.json();                // трансформ. в promise JS обєкт для подальшого викор.
};

//! fetch \ Функція - отримуєм карточки з сервера бази даних db.json
const getResource = async (url) => {
    let res = await fetch(url);           // чекаєм і отримуєм promise дані по запросу

    // Обробка ситуації з помилкою в запросі fetch
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();                // трансформ. в promise JS обєкт для подальшого викор.
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");











window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 5000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2021-12-19');
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map