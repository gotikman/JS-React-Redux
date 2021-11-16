// import logo from './logo.svg';
// import React from 'react';
import { Component } from 'react';
import './App.css';

const Header = () => {
    return <h2>Hello world!</h2>
}

// const Field = () => {
//     const holder = 'Enter here'
//     const styleField = {
//         width: '300px'
//     }
//     return <input
//         placeholder={holder}
//         type="text"
//         style={styleField} />
// }

class Field extends Component {           //!Cтворення компонента в синтаксисі Class
    render() {
        const holder = 'Enter here'
        const styleField = {
            width: '300px',
            backgroundColor: 'yellow'
        };

        return <input
            placeholder={holder}
            type="text"
            style={styleField} />
    }
}



function Btn() {
    const text = 'Log in';
    const logged = false;

    return <button>{logged ? 'Enter' : text}</button>       //! тернарний оператор If
}

function App() {                                     //! Основний компонент що передається в index.js
    return (
        <div className="App">
            <Header />
            <Field />
            <Btn />
        </div>
    );
}

// export { Header };
export default App;
