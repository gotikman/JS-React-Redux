"use strict";

//! Отримуєм степінь циклом
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// ------------------------------------------------------
//! Базова фун. рекурсії, отримуєм степінь
//? база рекурсії - випадок який призводить до завершення фун.
//? крок рекурсії - запуск вложеної фун., але вже з новим значенням
//? глубина рекурсії - загальна к-ть вкладених викликів включно з 1-м

// function pow(x, n) {               //? глубина "n"
//     if (n === 1) {                 //? база "1"
//         return x;
//     } else {
//         return x * pow(x, n - 1);  //? крок "n-1"
//     }
// }

// pow(2, 1)  // 2                     //? база "1"
// pow(2, 2)  // 4
// pow(2, 3)  // 8 
// pow(2, 4); // 16

//todo ------------------------------------------------------

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

//? вираховуєм середній процент з курсів, поле - progress, total / students

// ------------- функція циклом
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {              // перебор обєкта як масив
        if (Array.isArray(course)) {                        //! папали на масив
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }

        } else {                                            //! попали на обєкт
            for (let subCourse of Object.values(course)) {  // перебор обєкта як масив
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }

            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));

// ------------- функція на рекурсію
function getTotalProgressByRecursion(data) {

}



