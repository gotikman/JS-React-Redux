import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        windows = document.querySelectorAll('[data-modal]');

    //! Валідація поля номеру, ввід тільки цифри
    checkNumInputs('input[name="user_phone"]');

    //! Обєкт повідомлень користувачу
    const message = {
        loading: 'Завантаження...',
        success: 'Дякую! Незабаром з вами звяжуться!',
        failure: 'Упс! Щось пішло не так...'
    };

    //! fn відповідає за відправку запросів
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    //! функція очищає інпути
    const cleareInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        });
    };

    //! обробляєм відправку форм
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            //! можна зробити тег img і залежно від статусу міняти адреса атрибута href з обєкта message
            let statusMessage = document.createElement('div');  // блок статусу відправки
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);                //* збираєм дані з форми стандартної
            if (item.getAttribute('data-calc') === "end") {     //* добавляєм дані з інших форм (state)
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            //! відправка даних на сервер
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {                            //!!!
                    cleareInputs();                             // очищаєм інпути
                    setTimeout(() => {                          //* таймер після відправки форми
                        statusMessage.remove();                 // видаляєм блок статусу                  
                        document.body.style.overflow = "";      // включаю скрол контенту
                        document.body.style.marginRight = `0px` // удаляю відступ що заміняв скрол

                        windows.forEach(item => {               // закриваєм Усі модальні вікна
                            item.style.display = 'none';
                        })


                    }, 2000)
                })
        })
    });
};

export default forms;
