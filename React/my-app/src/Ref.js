import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

class Form extends Component {

    //* створюєм ref
    // myRef = React.createRef();   // створюєм ref, ref={this.myRef} - add to Input


    //* Ставимо фокус на
    // componentDidMount() {
    //     this.myRef.current.focus();        //силка на елемент знах. в спец. власт. current
    // }

    //* метод в себе приймає елемент як аргумент і створює ref в який поміщає силку на цей елемент
    setInputRef = elem => {
        this.myRef = elem;                    //? силка запишеться чиста, current буде не потрібний
    }

    //* повертаєм фокус на 1 input
    focusFirstTI = () => {
        if (this.myRef) {
            this.myRef.focus();                 //? current не потрібний якщо use call-back ref
        }
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            ref={this.setInputRef}
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea
                            onClick={this.focusFirstTI}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

// class TextInput extends Component {

//     doSmth = () => {
//         console.log('Smth')
//     }

//     render() {
//         return (
//             <input
//                 type="email"
//                 className="form-control"
//                 id="exampleFormControlInput1"
//                 placeholder="name@example.com" />
//         )
//     }
// }

export default Form;
