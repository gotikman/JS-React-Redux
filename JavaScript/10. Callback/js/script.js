"use strict";

function first () {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();
// __________________

// function learnJS(lang, Callback) {
//     console.log(`я вчу: ${lang}`);
//     Callback();
// }

// learnJS('JavaScript', function() {
//     console.log('я пройшов цей урок');
// });
// __________________

function learnJS(lang, Callback) {
    console.log(`я вчу: ${lang}`);
    Callback();
}

function done () {
    console.log('я пройшов цей урок');
}

learnJS('JavaScript', done);

