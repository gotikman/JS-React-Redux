import { useState, Component, createContext, useContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
// _________________________

const dataContext = createContext({
    mail: "name@example.com",                    //* параметри по замовчуванню
    text: 'some text',
    forceChangeMail: () => { console.log('click') }
});

const { Provider, Consumer } = dataContext;

// диструктуризуєм dataContext, витягуєм 2 сутності 
//? Provider - потрібен для передачі значення компонентам нижче по іерархії
//? Consumer - дозволя отримати дані, слідкує за їх зміною

// _________________________
const Form = (props) => {                         //! 2    Проміжний компонент
    console.log('render');
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

const InputComponent = () => {                    //! 3
    const context = useContext(dataContext);

    return (
        <input value={context.mail} type="email" className='form-control' placeholder="name@example.com"
            onFocus={context.forceChangeMail} />
    )
}


function UseContext() {                           //! 1 
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {                                //* функ. що міняє стейт, передаєм її нижче по дер. комп.
        setData({ ...data, mail: 'test@gmail.com' })
    }

    return (
        <Provider value={data}>

            <Form text={data.text} />
            <button
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>

        </Provider>
    );
}

export default UseContext;
