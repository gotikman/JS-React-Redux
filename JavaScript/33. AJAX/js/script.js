"use strict";

// 
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd'),
      inputEur = document.querySelector('#eur');

inputRub.addEventListener('input', () => {           //! відслідковуєм кожен ввід в поле форми
    const request = new XMLHttpRequest();            //! створюєм Обєкт запросу на сервер

    //! Методи XMLHttpRequest
    // request.open(method, url, async, login, pass);   \\ можливі варіанти аргументів
        //  ~ method --> "GET", "POST", "PUT", "DELETE",   \\ типи запросів
        //  ~    url --> адрес для запроса, JSON наприклад    \\ локальний адрес до кого запрос
    request.open('GET','js/current.json');           //! ініціолізує новий запрос, задаєм ТИП запросу
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //!встановлює значення HTTP заголовків
    request.send();                //! відправлення запросу , може містити body в POST

  
    //! Властивості XMLHttpRequest.*
    // status        \\ повертає код статусу 100 - 526 \\ 200 OK 
    // statusText     \\ повертає імя статусу \\ 404 Not Found 
    // response        \\ містить вміст body відповіді
    // readyState       \\ повертає поточний статус запросу  
        // 0	UNSENT              \\ Объект был создан. Метод open() ещё не вызывался.
        // 1	OPENED	            \\ Метод open() был вызван.
        // 2	HEADERS_RECEIVED	\\ Метод send() был вызван, доступны заголовки (headers) и статус.
        // 3	LOADING	            \\ Загрузка; responseText содержит частичные данные.
        // 4	DONE	            \\ Операция полностью завершена.
   
   //! Обробники подій для обєкту запроса
     
 // 1) спосіб "readystatechange'
    request.addEventListener('readystatechange', () => {           // слідкуєм за змінами readyState
        if (request.readyState === 4 && request.status === 200)  { // провірка на DONE і ОК
            console.log(request.response);                         // вміст відповіді з серверу
            const data = JSON.parse(request.response);             // зберігаєм відповідь в обєкт   
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);   // конвертуєм --> міняєм на сайт
        } else {
            inputUsd.value = 'Упс! Щось пішло не так';
        }
     });

// 2) спосіб 'load'
    request.addEventListener('load', () => {             // спрацьовує коли запрос повністю загружений
        if (request.status === 200)  {                   // провірка тільки на статус OK, томущо Load
            const data = JSON.parse(request.response);   // зберігаєм відповідь в обєкт   
            inputEur.value = (+inputRub.value / data.current.eur).toFixed(2);   // конвертуєм --> міняєм на сайт
        } else {
            inputUsd.value = 'Упс! Щось пішло не так';
        }
     });

});

