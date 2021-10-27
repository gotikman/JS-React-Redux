"use strict";

class User {          
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrenko';  //! # - робить приватну властивість в класі

    #gender = 'gender';

    say = () => {
        console.log(`Імя користувача: ${this.name}${this.#surname}, вік ${this._age}, ${this.#gender}`);
    }


    get age() {
        return this._age;
    }
    
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Невірне значення!');
        }
    }

    get gender() {
        return this.#gender;
    }

    set gender(gen) {
        this.#gender = gen;
    }
}   

const ivan = new User('Ivan', 36);
console.log(ivan.surname);             //! результат Undefined

console.log(ivan.gender);
console.log(ivan.gender = 'male');



ivan.say();