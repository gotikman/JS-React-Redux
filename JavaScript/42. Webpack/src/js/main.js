"use strict";

function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye!');
    };
}

//! синтакс CommonJS \ Експортуєм функцію для використ. в інших файлах JS
module.exports = myModule;