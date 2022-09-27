"use strict";

//* WeakMap та WeakSet - являються додатковим сховищем для обєктів що керуються ззовні в iншому місці в коді. Працєм тут тільки з {} і якщо нема на них силок і вони існують тільки в даних структурах - вони видаляються з памяті тому добре її оптимізовують та контролюють.  

//! ---------------------------- WeakMap ----------------------------------

//? WeakMap - ключами можуть бути тільки {обєкти}
//? Якщо нема силки на цей обєкт і він існує тільки в середині wm - він видалиться
//? Так як це динамічна змінна і керується браузером багато методів переборів не працює..
//! Methods: .set / .get / .delete / .has

let user = { name: 'Ivan' };

let map = new WeakMap();
map.set(user, 'data');

user = null;                      // видаляєм обєкт, силка на нього є тільки у WM тому він видалиться

console.log(map.has(user));

// ----------------- Delete offline user from mamory-----------------------

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user)
}

let lena = { name: 'Olena' };
let alex = { name: 'Oleksiy' };

cacheUser(lena);
cacheUser(alex);
lena = null;

console.log(cache.has(lena));   // => false
console.log(cache.has(alex));   // => true

//! ---------------------------- WeakSet ----------------------------------

//? WeaSet - добавляти можем тільки {обєкти};
//? Обєкт існує в множині тільки поки доступний ззовні і щось зсилається на нього
//? Так як це динамічна змінна і керується браузером багато методів переборів не працює..
//! Methods: .add / .delete / .has

let messages = [
    { text: 'Hello', from: 'John' },
    { text: 'World', from: 'Alex' },
    { text: '...', from: 'Russel' },
];

let readMessages = new WeakSet();         // умовно сховище непрочитаних меседжів

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

messages.shift();                        // видалив 1-й ел. {}, тому він зникне з WeakSet
console.log(readMessages.has(messages[0]));
