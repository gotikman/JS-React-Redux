import { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
// import './App.css';


//! Класовий компонент
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({ slide }) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({ autoplay }) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br /> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

//! Функціональний компонент з використанням useState HOOKS
const Slider = (props) => {

    // useState повертає масив з 2-х ел.: 1-state, 2-фун. що буде міняти цей state -> (setState)
    // [slide, setSlide] - диструктуризуєм одразу при створенні змінних на 2 ел. з useState
    // useState(0)       - передаєм одразу значення в змінну-state slide: 0

    const [slide, setSlide] = useState(10);
    const [autoplay, setAutoplay] = useState(false);

    function changeSlide(i) {                      // фун. setState +1\-1
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {                    // фун. setState toggle
        setAutoplay(autoplay => !autoplay)
    }
    //*  ______________________________

    //! якщо ми хоченмо зробити state де кілька параметрів в 1 змінній
    // const [state, setState] = useState({ slide: 0, autoplay: false })

    // function changeSlide(i) {
    //     setState(state => ({ ...state, slide: state.slide + i }));
    // }

    // function toggleAutoplay() {
    //     setState(state => ({ ...state, autoplay: !state.autoplay }))
    // }


    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />

                <div className="text-center mt-5">Active slide {slide} <br />
                    {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                    >+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}
                    >toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


export default Slider;