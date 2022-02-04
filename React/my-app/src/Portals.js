import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import './App.css';

class FormPortals extends Component {
    state = {
        advOpen: false                     //! стейт відповідає за рендер Portal
    }

    componentDidMount() {
        setTimeout(this.handlClick, 3000)   //! міняє стайт через 3сек після відкритя стор.
    }

    handlClick = () => {                      //! міняєм стейт по кліку
        console.log('click');
        this.setState(({ advOpen }) => ({
            advOpen: !advOpen
        }))
    }

    render() {
        return (
            <Container>
                <form
                    onClick={this.handlClick}
                    className="w-50 border mt-5 p-3 m-auto"
                    style={{
                        'overflow': 'hidden',
                        'position': 'relative'
                    }}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea2" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                    </div>
                    {/* закускаєм Portal згідно state*/}
                    {
                        this.state.advOpen ?
                            <Portal>
                                <Msg />
                            </Portal> : null
                    }
                </form>
            </Container>
        )
    }
}

//! Компонент Портал
const Portal = (props) => {

    // створ. елемент та доб. в ДОМ, в нього будем поміщати потріб. ел. для рендерингу
    const node = document.createElement('div');
    document.body.appendChild(node);

    // 1-аргумент (props.children) - що ми хочемо відрендирити, відрендерить вміст Portal
    // 2-аргумент (container)- куди потрібно його помістити
    return ReactDOM.createPortal(props.children, node)
}

//? компонент що потрібно відрендирити в іншому, буде дочірнім в Portal
const Msg = () => {
    return (
        <div
            style={{
                'width': '435px',
                'height': '67px',
                'backgroundColor': 'red',
                'position': 'absolute',
                'right': '23%',
                'bottom': '0%',
                'top': '224px'
            }}>
            Hello PORTAL
        </div>
    )
}

function AppPortals() {
    return (
        <FormPortals />
    );
}

export default AppPortals;
