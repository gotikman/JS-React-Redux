import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMassage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelServise = new MarvelService();

    componentDidMount() {
        this.marvelServise
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    renderItems = (arr) => {

        const items = arr.map((item) => {
            const checkCover = item.thumbnail.search('not_available') > 0 ? { objectFit: 'unset' } : null;
            return (
                <li key={item.key}
                    className="char__item ">

                    <img src={item.thumbnail}
                        alt="abyss"
                        style={checkCover} />
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
        const { charList, loading, error } = this.state;

        const items = this.renderItems(charList);

        const spinner = loading ? <Spinner /> : null;
        const errorMassage = error ? <ErrorMessage /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {spinner}
                {errorMassage}
                {content}

                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;

