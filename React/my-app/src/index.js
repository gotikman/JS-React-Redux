import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//? створюєм h2 - звичайний синтаксис JS
// const elem = React.createElement('h2', { className: 'greeting' }, 'Hello World!');

//? створюєм h2 - JSX синтаксис 
// const elem = <h2>Hello World!</h2>;

const text = 'Hello World!';

const elem = (
    <div>
        <h2 className="text">Текст: {text}</h2>
        <input type='text' />
        <button tabIndex="0">Click</button>
    </div>
);



ReactDOM.render(
    // <React.StrictMode>
    //   <App />                            {/* Що ми розміщуєм */}
    // </React.StrictMode>,
    elem,
    document.getElementById('root')      /* куди ми розміщуєм */
);


