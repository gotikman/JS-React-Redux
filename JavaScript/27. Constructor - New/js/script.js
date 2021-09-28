"use strict";

function User(name, id) {              // Функція Прототип для створення обєктів
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Користувач ${this.name} вийшов`);
};

const user1 = new User('Ruslan', 1985);   // створюєм новий обєкт на основі User за допомогою new
const user2 = new User('Hrystya', 1989);  // створюєм новий обєкт на основі User за допомогою new

user1.exit();

user1.hello();       // викликаєм внутрішній метод функції
user2.hello();       // викликаєм внутрішній метод функції

console.log(user1, user2);