//* Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
//* Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { heroesFetching, heroesFetched, heroesFetchingError, heroesDeleted } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './heroesList.css';

const HeroesList = () => {
    const { heroes, heroesLoadingStatus, filters } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
        // eslint-disable-next-line
    }, []);

    //! --------------------------------------------------------
    const deleteHero = (id) => {
        const newList = heroes.filter(item => item.id !== id);

        dispatch(heroesDeleted(newList));
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
    }
    //! --------------------------------------------------------
    const filterHeroes = (heroes, filters) => {
        switch (filters) {
            case 'Все':
                return heroes;
            case 'Вогонь':
                return heroes.filter(item => item.element === filters);
            case 'Вода':
                return heroes.filter(item => item.element === filters);
            case 'Вітер':
                return heroes.filter(item => item.element === filters);
            case 'Земля':
                return heroes.filter(item => item.element === filters);
            default:
                return heroes
        }
    }
    //! --------------------------------------------------------

    if (heroesLoadingStatus === "loading") {
        return <Spinner />;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {

            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition key={id} timeout={500} classNames="item">
                    <HeroesListItem
                        onDelete={() => deleteHero(id)}
                        key={id}
                        {...props} />
                </CSSTransition>
            )
        })
    }
    // --------------------------------------------------------
    const elements = renderHeroesList(filterHeroes(heroes, filters));

    return (
        <ul>
            <TransitionGroup component={null}>
                {elements}
            </TransitionGroup>
        </ul>
    )
}

export default HeroesList;

