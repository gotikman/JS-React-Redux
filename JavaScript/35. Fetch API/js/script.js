"use strict";


//! GET запрос
fetch('https://jsonplaceholder.typicode.com/todos/1')   //! отримуєм Promise по API 1-e to-do як JSON
.then(response => response.json())                     // встроєна можливість конверт. JSON в обєкт JS
.then(json => console.log(json));

//! POST запрос
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',                                        //! Настройки POST
    body: JSON.stringify({name: 'Alex'}),                  //! Настройки POST Body
    headers: {                                             //! Настройки POST заголовки
        'Content-type': 'application/json',
    }
})   
.then(response => response.json())       // встроєна можливість конверт. JSON в обєкт JS           
.then(json => console.log(json));



