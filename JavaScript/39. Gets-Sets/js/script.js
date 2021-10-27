"use strict";

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {              //!Set
        return this.age;
    },

    set userAge(num) {            //!Set
        this.age = num;
    }
};

console.log(persone.userAge);      //! Get дізнаємся значення
console.log(persone.userAge = 30); //! Set встановлюєм значення 
console.log(persone.userAge);