import { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMassage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,                     // 1539 тестування останніх
        charEnded: false
    }

    marvelServise = new MarvelService();

    componentDidMount() {
        this.onRequest();                // викликаєм без значення, в сервісі підставиться дефолтний
        // window.addEventListener('scroll', this.scrollToEnd)
    }

    //* Скрипт підгрузки персонажів після прокрутки сторінки до кінця
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.scrollToEnd)
    // }

    // scrollToEnd = () => {
    //     if (window.pageYOffset + document.documentElement.clientHeight
    //         >= document.documentElement.scrollHeight) {
    //         this.onRequest(this.state.offset)
    //     }
    // }

    onRequest = (offset) => {             // загрузка і дозагрузка персонажів
        this.onCharListLoading();         // блокуєм кнопку при дозагрузці
        this.marvelServise
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }


    onCharListLoading = () => {            // методо - індикатор дозагрузки персонажів , use 4 button off
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newcharList) => {
        let ended = false;
        if (newcharList.length < 9) {
            ended = true;
        }

        this.setState(({ offset, charList }) => ({       //? повертаєм обєкт з цієї функції
            charList: [...charList, ...newcharList],     //? розгортаєм старі і дозагружені персонажі
            loading: false,
            newItemLoading: false,                       // включаєм кнопку після дозагрузки 
            offset: offset + 9,                           //? зміщуєм діапазон дозагрузки персонажів     
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    //! Створюю масив для Ref і функцію для добавлення call-back ref
    itemRefs = [];
    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }


    renderItems = (arr) => {
        const items = arr.map((item, i) => {
            const checkCover = item.thumbnail.search('not_available') > 0 ? { objectFit: 'unset' } : null;
            return (
                <li
                    className="char__item"
                    tabIndex={0}
                    ref={this.setRef}
                    key={item.key}
                    onClick={() => {
                        this.props.onCharSelected(item.key)
                        this.focusOnItem(i)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.key);
                            this.focusOnItem(i);
                        }
                    }}
                >

                    <img src={item.thumbnail} alt="abyss" style={checkCover} />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    // __________________________________________________________________

    render() {
        const { charList, loading, error, offset, newItemLoading, charEnded } = this.state;

        const items = this.renderItems(charList);

        const spinner = loading ? <Spinner /> : null;
        const errorMassage = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {spinner}
                {errorMassage}
                {content}

                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{ 'display': charEnded ? 'none' : 'block' }}
                    onClick={() => this.onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

// валідація пропса onCharSelected на тип - функція та наявність в цілому
CharList.protoTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;


//! СВІЙ ВАРІАНТ РЕАЛІЗАЦІЇ ПІДСВІТКИ ПІСЛЯ КЛІКУ І УПРАВЛІННЯ ПО ТАБ
// import { Component } from 'react';
// import PropTypes from 'prop-types';

// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMassage/ErrorMessage';
// import MarvelService from '../../services/MarvelService';
// import './charList.scss';

// class CharList extends Component {

//     state = {
//         charList: [],
//         loading: true,
//         error: false,
//         newItemLoading: false,
//         offset: 1539,
//         charEnded: false,
//         styleSelect: null
//     }

//     marvelServise = new MarvelService();

//     componentDidMount() {
//         this.onRequest();                // викликаєм без значення, в сервісі підставиться дефолтний
//         // window.addEventListener('scroll', this.scrollToEnd)
//     }

//     //* Скрипт підгрузки персонажів після прокрутки сторінки до кінця
//     // componentWillUnmount() {
//     //     window.removeEventListener('scroll', this.scrollToEnd)
//     // }

//     // scrollToEnd = () => {
//     //     if (window.pageYOffset + document.documentElement.clientHeight
//     //         >= document.documentElement.scrollHeight) {
//     //         this.onRequest(this.state.offset)
//     //     }
//     // }

//     onRequest = (offset) => {             // загрузка і дозагрузка персонажів
//         this.onCharListLoading();         // блокуєм кнопку при дозагрузці
//         this.marvelServise
//             .getAllCharacters(offset)
//             .then(this.onCharListLoaded)
//             .catch(this.onError)
//     }


//     onCharListLoading = () => {            // методо - індикатор дозагрузки персонажів , use 4 button off
//         this.setState({
//             newItemLoading: true
//         })
//     }

//     onCharListLoaded = (newcharList) => {
//         let ended = false;
//         if (newcharList.length < 9) {
//             ended = true;
//         }

//         this.setState(({ offset, charList }) => ({       //? повертаєм обєкт з цієї функції
//             charList: [...charList, ...newcharList],     //? розгортаєм старі і дозагружені персонажі
//             loading: false,
//             newItemLoading: false,                       // включаєм кнопку після дозагрузки 
//             offset: offset + 9,                           //? зміщуєм діапазон дозагрузки персонажів     
//             charEnded: ended
//         }))
//     }

//     onError = () => {
//         this.setState({
//             loading: false,
//             error: true
//         })
//     }

//     selectItemStyle = (id) => {
//         this.setState({
//             styleSelect: id
//         })
//     }

//     renderItems = (arr) => {

//         const items = arr.map((item) => {
//             let styleSelected = 'char__item ';
//             if (this.state.styleSelect === item.key) {
//                 styleSelected += "char__item_selected"
//             }

//             const checkCover = item.thumbnail.search('not_available') > 0 ? { objectFit: 'unset' } : null;
//             return (
//                 <li key={item.key}

//                     className={styleSelected}
//                     onClick={(e) => {
//                         this.props.onCharSelected(item.key);
//                         this.selectItemStyle(item.key)
//                     }}
//                     onFocus={() => {
//                         this.selectItemStyle(item.key)
//                         this.props.onCharSelected(item.key);
//                     }}>

//                     <img src={item.thumbnail} alt="abyss" style={checkCover} />
//                     <div className="char__name"
//                         tabIndex="99">
//                         {item.name}</div>
//                 </li>
//             )
//         })

//         return (
//             <ul className="char__grid">
//                 {items}
//             </ul>
//         )
//     }

//     // __________________________________________________________________

//     render() {
//         const { charList, loading, error, offset, newItemLoading, charEnded } = this.state;

//         const items = this.renderItems(charList);

//         const spinner = loading ? <Spinner /> : null;
//         const errorMassage = error ? <ErrorMessage /> : null;
//         const content = !(loading || error) ? items : null;

//         return (
//             <div className="char__list">
//                 {spinner}
//                 {errorMassage}
//                 {content}

//                 <button
//                     className="button button__main button__long"
//                     disabled={newItemLoading}
//                     style={{ 'display': charEnded ? 'none' : 'block' }}
//                     onClick={() => this.onRequest(offset)}
//                 >
//                     <div className="inner">load more</div>
//                 </button>
//             </div>
//         )
//     }
// }

// // валідація пропса onCharSelected на тип - функція та наявність в цілому
// CharList.protoTypes = {
//     onCharSelected: PropTypes.func.isRequired
// }

// export default CharList;

