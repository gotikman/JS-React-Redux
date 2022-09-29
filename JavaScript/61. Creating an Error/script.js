'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'іі',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]


try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`В даних по номеру ${i + 1} нема id `)

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })

} catch (e) {
    if (e.name === 'SyntaxError') {
        console.log(e.message);
    } else throw e;               //! якщо це не наша помилка з try -> викидуєм вище, код нижче не виконується

}

//? const err = new S  yntaxError('some error');     // тип SyntaxError
//? const err = new Error('some error');           // тип Error
//? console.log(err.name, err.message, err.stack); // дані помилки
