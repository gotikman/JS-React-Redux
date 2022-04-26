//! Задача для этого компонента:
//* Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active  //! Library
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect, useState } from "react";
import { useHttp } from '../../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { filterSelected } from '../../actions';

const HeroesFilters = () => {
    const { request } = useHttp();
    const [filters, setFilters] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        request("http://localhost:3001/filtersColor")
            .then(data => setFilters(data))
        // eslint-disable-next-line
    }, []);

    const onFilterSelected = (elementName) => {
        dispatch(filterSelected(elementName))
    }

    const renderFilter = filters.map(({ elementName, className }) => {
        return (
            <button
                key={uuidv4()}
                className={className}
                onClick={() => onFilterSelected(elementName)}

            >{elementName}</button>
        )
    })


    // ------------------------------------------------------------------------------
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary ">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary ">Земля</button>
                </div>
            </div>

            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {renderFilter}
                </div>
            </div>

        </div>
    )
}

export default HeroesFilters;