import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {

    const duration = 500;

    // const defaultStyle = {                                       //стилі та тип анімації     
    //     transition: `all ${duration}ms ease-in-out`,
    //     opacity: 0,
    //     visibility: 'hidden'
    // }

    // const transitionStyles = {                                  //стилі на перехідних етапах        
    //     entering: { opacity: 1, visibility: 'visible' },
    //     entered: { opacity: 1, visibility: 'visible' },
    //     exiting: { opacity: 0, visibility: 'hidden' },
    //     exited: { opacity: 0, visibility: 'hidden' },
    // };

    return (
        <CSSTransition
            in={props.show}
            timeout={duration}
            onEnter={() => props.setShowTriger(false)}
            onExit={() => props.setShowTriger(true)}
            classNames="modal"
            mountOnEnter
            unmountOnExit>
            <div className="modal mt-5 d-block" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Typical modal window</h5>
                            <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body content</p>
                        </div>

                        <div className="modal-footer">
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showTriger, setShowTriger] = useState(true);            //? вкл-викл кнопки

    return (
        <Container>
            {<Modal show={showModal} onClose={setShowModal} setShowTriger={setShowTriger} />}
            {showTriger ?
                <button
                    type="button"
                    className="btn btn-warning mt-5"
                    onClick={() => setShowModal(true)}>Open Modal</button> :
                null}
        </Container>
    );
}

export default App;
