// import logo from './logo.svg';
// import React from 'react';
import { Component } from 'react';
import './App.css';

const Header = () => {
    return <h2>Hello world!</h2>
}

// const Field = () => {                //!функціональний компонент
//     const holder = 'Enter here'
//     const styleField = {
//         width: '300px'
//     }
//     return <input
//         placeholder={holder}
//         type="text"
//         style={styleField} />
// }

class Field extends Component {           //! класовий компонент
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

//!Класовий компонент з станом State!
class StatComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yers: 27,                    //! state оголошення
            position: ""
        }
    }

    //! метод-класа збільшення state
    nextYers = () => {
        this.setState(state => ({        //! state 1-й аргумент
            yers: state.yers + 1         //! state зміна +1
        }))
    }

    //! метод-класа обробника події
    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;    //! Деструк. витягуєм для роботи
        const { position, yers } = this.state;           //! Деструк. витягуєм для роботи

        return (
            <>
                <button onClick={this.nextYers}>+++</button>
                <h1>My name is {name},
                    surname - {surname},
                    age - {yers},
                    position - {position}</h1>
                <a href={link}>Силка</a>
                <form>
                    <span>Введіть посаду </span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e)} />
                </form>
            </>
        )
    }
}

//! Основний компонент що передається в index.js
function App() {
    return (
        <div className="App">
            <Header />
            <Field />
            <Btn />

            {/* <WhoAmI name="Roman" surname="Smith" link="www.google.com" /> */}
            {/* <PropsDestr name={() => { return 'John' }} surname={{ call: "Olga" }} link="www" /> */}

            <StatComp name="Roman" surname="Smith" link="www.google.com" />
            <StatComp name="Roman" surname="Smith" link="www.google.com" />

        </div>
    );
}

// export { Header };
export default App;

