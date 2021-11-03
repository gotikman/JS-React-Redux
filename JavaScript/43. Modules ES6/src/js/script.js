"use strict";

//! Імпортуєм змінні з main.js

// ----1
import { one, two } from './main';          //* імпорт змінних
console.log(`${one} and ${two}`);
// ----2
import { three as tru } from './main';      //* імпорт з перейменуванням
console.log(tru);
// ----3
import * as data from './main';             //* iмпорт всього як обєкт
data.sayHi();                               //виклик функції
console.log(data.three);                    //викор. змінної
// ----4
import sayBye from './main';                //* імпорт функції, default
sayBye();                                   //виклик функції

