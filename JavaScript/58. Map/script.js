"use strict";

//? Map - картами, мапами називаються специфічні структури данних які схожі на {}, але в них замість властовості (key) може використовуватися обєкт, масив, функція і т.д
//? Map - в середині це масив-масивів [[{key}:value], [...]]
//? Порядок властивостей в картах зажди такий в якому їх добавляли
//? При створенні пустої мапи - вона повністю пуста без методів і т.д
//? Map зручно перебирати порівнянно з {}
//? В map легко дізнатися довжину тобто к-ть ключів через *.size

const shops = [                    // масив обєктів
    { rice: 500 },
    { oil: 200 },
    { bread: 50 }
]

const budget = [500, 1000, 2500]   // масив значень

// --------------------------- CREATE ----------------------------------------

// const map = new Map();             //! створив Map пустий
const map = new Map([                 //! створив Map + initial data
    [{ paper: 400 }, 8000]
]);

// --------------------------- METHODS ---------------------------------------

//! *.set()        - добавляєм значення в map, поверне нову мапу

shops.forEach((shop, i) => {       //* 1. наповнюєм циклом комбінуючи 2 масива
    map.set(shop, budget[i])
})

map.set(shops[0], 500)             //* 2. наповнюєм вручну, по цепочці
    .set(shops[1], 1500)
    .set(shops[2], 2500);

console.log(map);

//! *.get(key)      -  отримує значення з мап
//! *.has(key)      -  перевіряєм на наявність key в мап
//! *.delete(key)   -  видаляєм ключ з мап
//! *.clear()       -  очищаєм мапу
//! *.size          -  к-ть ключів, властивість
// console.log(map.get(shops[0]));     // => 500
// console.log(map.has(shops[0]));     // => true
// console.log(map.size)               // => 3

// --------------------------- ITERATORS -------------------------------------

//! map.keys()        - повертає ключі мапи як масив [{ключ}, {ключ}]  

for (let shop of map.keys()) {           //* перебрали і вивели КЛЮЧІ мапи
    console.log(shop)                    // => { paper: 400 } { rice: 500 } ...
}

// --------------------------
const goods = [];
for (let shop of map.keys()) {          //* перебрали і вивели Назви ключів мапи
    goods.push(Object.keys(shop)[0])
}
console.log(goods)                      // => [ 'paper', 'rice', 'oil', 'bread' ]

// --------------------------
//! map.values()      - повертає значення кожного ключа ітеруємого обєкту map

for (let price of map.values()) {
    console.log(price)                  // => 800 500 1500 2500
}

// --------------------------
//! map.entries()    - перетворює map в масив масивів [[{key}, value],[{key},value]]    
//                   - диструктуризацією дозволяє замінити методи keys() і values()  

for (let price of map.entries()) {
    console.log(price)                      // => [{ paper: 400 }, 8000] ...
}

for (let [shop, price] of map.entries()) {  //* диструктуризація, витягуєм 1 і 2 значення
    console.log(price, shop)                // => 8000 { paper: 400 }
}

// --------------------------
//! map.forEach(value, key, map)

map.forEach((value, key, map) => {
    console.log(key, value)               // => { paper: 400 } 8000  ...
})


// --------------------------- TRANSFORM {} <--> Map ---------------------------------

const user = {
    name: 'Stepan',
    surname: 'Bandera',
    birthday: '01/01/1909',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user));          //* Перетворюєм {} в Map
console.log(userMap);


const newUserObj = Object.fromEntries(userMap)          //* Перетворюєм Map в {}
console.log(newUserObj);