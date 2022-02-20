import { useState, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// ----------------------------------------------------
// state  --> стан який буде мінятися(autoplay)
// action --> назва дії яку хочемо виконати-обробити, залежно від переданого значення З dispatch 
// switch --> провіряєм action.type\action.payload що передали з dispatch 
function reducer(state, action) {            //? функція відповідає за модифікацію стану
    switch (action.type) {
        case 'toggle':
            return { autoplay: !state.autoplay };
        case 'slow':
            return { autoplay: 300 };
        case 'fast':
            return { autoplay: 700 };
        case 'custom':
            return { autoplay: action.payload }
        default:
            throw new Error();
    }
}
// ----------------------------------------------------
function init(initial) {
    return { autoplay: initial }             //? отримуєм та обробляєм початковий стан
}
// ----------------------------------------------------

const Slider = ({ initial }) => {
    const [slide, setSlide] = useState(0);

    const [autoplay, dispatch] = useReducer(reducer, initial, init);  //? приймає 3 агрумента

    function changeSlide(i) { setSlide(slide => slide + i); }

    return (
        <Container>
            <div className="slider w-60 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br />{autoplay.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({ type: 'toggle' })}>toggle autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({ type: 'slow' })}>slow autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({ type: 'fast' })}>fast autoplay</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={(e) => dispatch({ type: 'custom', payload: +e.target.textContent })}>1000</button>
                </div>
            </div>
        </Container>
    )
}

function UseReducer() {
    return (
        <Slider initial={false} />
    );
}

export default UseReducer;
