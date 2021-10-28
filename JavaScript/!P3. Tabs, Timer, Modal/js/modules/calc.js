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
        console.log(selector);

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

module.exports = calc;