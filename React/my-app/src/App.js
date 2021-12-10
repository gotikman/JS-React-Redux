// import logo from './logo.svg';
// import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

import './App.css';

const Header = () => {
    return <h2>Hello world!</h2>
}

class Field extends Component {           //! класовий компонент
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
                    <span> fdsgdfdf Введіть посаду</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e)} />
                </form>
            </EmpItem>
        )
    }
}

//! Описуєм стилі Styled Components
const Wrapper = styled.div`
    width: 1000px;
    margin: 80px auto 0 auto;
    text-align: center;
`;

//! Основний компонент що передається в index.js 
function App() {
    return (
        <Wrapper>
            <Header />
            <Field />
            <Btn />

            <StatComp name="Roman" surname="Smith" link="www.google.com" />
            <StatComp name="Roman" surname="Smith" link="www.google.com" />

        </Wrapper>
    );
}

// export { Header };
export default App;

