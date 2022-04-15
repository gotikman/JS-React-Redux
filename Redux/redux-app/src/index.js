import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';             // import { inc, dec, rnd } from './actions';

const store = createStore(reducer);                //! створюєм сховище
const { dispatch, subscribe, getState } = store;  // достаєм(диструктуруєм) щоб не писати store.*

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// -------------------------------------------------------------------------------
//! bindActionCreator - функція генерує функції для подій (Action Creator)
// цу функція що повертає іншу функцію в якій буде щось відбуватися
// creator - це фун що має повернути обєкт з певним типом -> { type: 'DEC' }
// ...args - це можливі аргументи що можуть приходити (розгортаєм rest оператором)

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

//* actions - обєкт з подіями що імпортнули --> export const inc = () => ({ type: 'INC' })
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);



// -------------------------------------------------------------------------------
document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);                                        // передаєм значення рандом формули
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);


