import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BootstrapFormSlider } from './BootstrapTest';
// import { Header } from './App'                         //!імпорт 1 компонента
import { Button } from './App';                            //!імпорт комп. стилю
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`                           //! Наслідування com.sytled
margin: 0 auto;
width: 245px;
height: 30px;
margin-bottom: 20px;

`

ReactDOM.render(
    <StrictMode>
        <App />
        {/* <BigButton as="a"> Відправити звіт </BigButton> */}
        {/* <BootstrapFormSlider /> */}
    </StrictMode>,
    document.getElementById('root')      /* куди ми розміщуєм */
);

