

//! Імпортую функцію з іншого файлу
const myModule = require("./main");

//! Присвоюю імп. функцію у зміну
const myModuleInstance = new myModule();

//! Викликаю методи
myModuleInstance.hello();
myModuleInstance.goodbye();

