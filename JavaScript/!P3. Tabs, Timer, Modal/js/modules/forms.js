function forms() {
    //! ВІДПРАВКА ДАНИХ З ФОРМ НА СЕРВЕР
// 2 форми в нас і відповідно обробника тому обернемо у функцію яку будем викликати при відправки форми
    
    const forms = document.querySelectorAll('form');   // Отримуєм форму

    const message = {                               // обєкт для виводу користувачу повідомлень
        loading: 'img/form/spinner.svg',
        success: 'Дякую! Незабаром ми з Вами звяжимось',
        failure: 'Упс! Щось пішло не так...'
    };

    forms.forEach(item => {                       // Вішаєм функцію на усі форми
        bindPostData(item);
    });
    
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
    
            const formData = new FormData(form);      //! створюєм обєкт FD в який буде приходити форма що передали

            //! FormData конвертуєм в JSON
            const object = {};    // Обєкт для заливки з FormData
            formData.forEach(function(value, key) {
                object[key] = value;
            });                 

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

}

module.exports = forms;