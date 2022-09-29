"use strict";
//? Micro tasks - це ті що формуються в try / catch / finally / .then / await
//? ... і запускаються усі одразу після певної Macro задачі

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('wow'))    //! добавляєм в чергу micro задач

Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('code');
