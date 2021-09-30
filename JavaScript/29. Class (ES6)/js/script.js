"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {                          // створюю метод
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {   //? синтаксичний цукор для реаліз протот. насл.
    constructor(height, width, text, bgColor) {      //? властивість вказує на те що буде відбув. безп. в конст.
        super(height, width);                        //? викликає конструктор батька // на 1-у місці 
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, колік: ${this.bgColor}`);
    }


}

const div = new ColoredRectangleWithText(25, 10, 'Всім добра', 'red');

div.showMyProps();
console.log(div.calcArea());

console.log(div);

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());


// абстракція - це відділення концепції від її екземплярів
// наслідування - можливість нашого обєкта чи класу базуватися на іншому обєкті чи класу