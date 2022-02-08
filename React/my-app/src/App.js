// import logo from './logo.svg';

import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';
import Form from './Ref';
import AppPortals from './Portals';
import Slider from './SliderHooks';
import RefHook from './RefHook';
import CustomHook from './CustomHook';

import './App.css';

// _________________________________________________

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
// _________________________________________________

//! Компонент композиція, створений з іншого і трохи модифікований, по типу наслідування
//? Композиція(спеціалізація)- це коли ми обєднюєм компоненти та надаєм їм нових властивостей по типу наслідування

const HelloCreating = () => {
    return (
        <div style={{ 'width': '600px', 'margin': '0 auto' }}>
            <DynamicCreating color={'primary'}>
                <h2>Hello everyone</h2>
            </DynamicCreating>
        </div>
    )
}

// _________________________________________________

//! Remder-props патерн !!!!
//* 2 Окремих специфічних компонента можна звязати між собою щоб 1 працював в середині 2

const Message = (props) => {              //? метод який передаєтся в інший для рендера
    return (
        <h2>The counter is {props.counter}</h2>
    )
}

class Counter extends Component {       //? метод який приймає props що буде функцією з іншим методом
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }))
    }

    render() {
        return (
            <>
                <button
                    className={'btn btn-primary mt-3'}
                    onClick={this.changeCounter}>
                    Click me
                </button>
                {this.props.render(this.state.counter)}
            </>
        );
    }
}

// _________________________________________________

//! Основний компонент що передається в index.js 
function App() {
    return (

        <Wrapper>
            <CustomHook />
            {/* <RefHook /> */}
            {/* <Slider /> */}
            {/* <AppPortals /> */}
            <Form />

            <Counter render={counter => (
                <Message counter={counter} />
            )} />

            {/* <Field /> */}
            {/* <Btn /> */}


            {/* <HelloCreating /> */}
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

