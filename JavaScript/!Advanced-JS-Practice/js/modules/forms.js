
import { openModal, closeModal } from './modal';
import { postData } from '../services/services';

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

            postData('http://localhost:3000/requests', JSON.stringify(object))
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
        openModal('.modal', modalTimerId);                           // підвязуєм відкриття  нового вікна

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
            closeModal('.modal');
        }, 4000);
    }
}

// module.exports = forms;  // старий спосіб експорту
export default forms;