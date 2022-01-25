// import logo from './logo.svg';

// import { cloneElement } from 'react';
// import { Children } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
// import BootstrapTest from './BootstrapTest';
import BootstrapTest from './BootstrapTest';

import './App.css';

// _________________________________________________
const Header = () => {
    return <h2>Hello world!</h2>
}
class Field extends Component {
    render() {
        const holder = 'Enter here'
        const styleField = {
            width: '300px',
            backgroundColor: 'yellow',
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
// _________________________________________________

//! Описуєм стилі Styled Components
const EmpItem = styled.div`    
    padding: 20px;
    margin-bottom: 15px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgb(0 0 0 / 50%);
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'Black'};
    }
    input {
        border: 3px solid grey;
    }
`;

const HeaderStyle = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgb(0 0 0 /20%);
    box-shadow: 5px 5px 10px rgb(0 0 0 /20%);
    text-align: center;
    `

const Wrapper = styled.div`                          //? Обгортка для усіх Компонентів
    width: 1000px;
    margin: 80px auto 0 auto;
    text-align: center;
`;

// _________________________________________________

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
        const { name, surname, link } = this.props;      //! Деструк. витягуєм для роботи
        const { position, yers } = this.state;           //! Деструк. витягуєм для роботи

        return (
            <EmpItem active>
                <Button onClick={this.nextYers}>+++</Button>
                <HeaderStyle>My name is {name},
                    surname - {surname},
                    age - {yers},
                    position - {position}</HeaderStyle>
                <a href={link}>Силка </a>
                <form>
                    <span> Введіть посаду</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e)} />
                </form>
            </EmpItem>
        )
    }
}

// _________________________________________________

//! Компонент в який будуть передаватися дочірні елементи props.children
//? Компонент дозволяє вставляти елементи у верстку, а також модифікувати, добавляти класи і т.д

const DynamicCreating = (props) => {
    return (
        <div className={'mb-3 mt-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, { className: 'shadow p-3 border rounder' })
                })
            }
        </div>
    )
}

//! Основний компонент що передається в index.js 
function App() {
    return (
        <Wrapper>
            <Header />
            <Field />
            <Btn />

            <BootstrapTest
                left={
                    <DynamicCreating color={'primary'}>
                        <h2>Hello World</h2>
                        <h2>I am a happy</h2>
                    </DynamicCreating>
                }
                right={
                    <DynamicCreating color={'primary'}>
                        <h2>Right!!!</h2>
                        <h2>Thx a lot</h2>
                    </DynamicCreating>
                }
            />

            <StatComp name="Roman" surname="Smith" link="www.google.com" />
            <StatComp name="Igor" surname="Pavelko" link="www.google.com" />

        </Wrapper>
    );
}

// export { Header };
export default App;

