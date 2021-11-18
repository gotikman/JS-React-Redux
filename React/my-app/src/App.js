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

//? Властивості компонентів props
// function WhoAmI(props) {
//     return (
//         <div>
//             <h1>My name is {props.name}, surname - {props.surname} </h1>
//             <a href={props.link}>Силка</a>
//         </div>
//     )
// }
// function PropsDestr({ name, surname, link }) {
//     return (
//         <div>
//             <h1>My name is {name()}, surname - {surname.call} </h1>
//             <a href={link}>Силка</a>
//         </div>
//     )
// }
//!Класовий компонент з станом State!
class StatComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yers: 27
        }
    }

    nextYers = () => {
        this.setState(state => ({
            yers: state.yers + 1
        }))
    }

    render() {
        const { name, surname, link } = this.props;
        return (
            <div>
                <button onClick={this.nextYers}>+++</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.yers}</h1>
                <a href={link}>Силка</a>
            </div >
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



