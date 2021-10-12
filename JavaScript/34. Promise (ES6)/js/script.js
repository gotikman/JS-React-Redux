"use strict";

console.log('Запрос данних...');

// resolv - передаєм функцію \ щось виповнилося правильно
// reject - передаєм функцію \ щось виповнилося не правильно
const req = new Promise(function(resolve, reject){    //! створили проміс позитив\негатив
    setTimeout(() => {
        console.log('Підготовка данних...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);                    // повертаєм з проміса дані
    }, 2000);
});                 

//! then - мотод виконується на промісі у випадку позитивного виповнення
req.then((product) => {
    return new Promise((resolve, reject) => {  //! створили ще 1 проміс, чекаєм виконання
        setTimeout(() => {
            product.status = 'order';
            resolve(product);            // обробляєм і знову повертаєм дані
        }, 2000);
    });   
  
}).then(data => {                       //! data - дані з resolve
    data.modify = true;
    return data;                        //! повертаєм дані для наступних кроків
}).then(data2 => {
    console.log(data2);
}).catch(() => {                         //! catch метод, блок коду для помилки REJECT
    console.error('Відбулася помилка'); 
}).finally(() => {                       //! finally метод виконується незалежно від виконання пром.
    console.log('finally');
});

// _______________
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

//! Promise.all приймає масив промісів, чекає поки всі виконаютсья і тільки тоді щось виконує
Promise.all([test(1000), test(2000)]).then(() => {     
    console.log('ALL');
});

//! Promise.race приймає масив промісів, чекає викнання хочаб 1 і виконує код
Promise.race([test(1000), test(2000)]).then(() => {     
    console.log('ALL1');
});