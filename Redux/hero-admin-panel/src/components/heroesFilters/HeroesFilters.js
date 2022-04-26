//* Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active   
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect, useState } from "react";
import { useHttp } from '../../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';
import { filterSelected } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const HeroesFilters = () => {
    const { request } = useHttp();
    const [filterButtons, setFilters] = useState([]);
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state);

    useEffect(() => {
        request("http://localhost:3001/filtersColor")
            .then(data => setFilters(data))
        // eslint-disable-next-line
    }, []);

    const onFilterSelected = (elementName) => {
        dispatch(filterSelected(elementName))
    }

    const renderFilter = filterButtons.map(({ elementName, className }) => {
        var classNames = require('classnames');
        var btnClass = classNames({
            'active': filters === elementName,
        });

        return (
            <button
                key={uuidv4()}
                className={`${btnClass} ${className}`}
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

                    {renderFilter}

                </div>
            </div>

        </div>
    )
}

export default HeroesFilters;