//* Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
//* Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
//* Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтро

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { heroesAdded } from '../../actions';
import { useHttp } from '../../hooks/http.hook';

const HeroesAddForm = () => {
    //! --------------------------------------------------------
    const { heroes } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    const [state, setState] = useState({
        name: '',
        description: '',
        element: ''
    })
    const [filters, setFilters] = useState([]);

    // --------------------------------------------------------
    useEffect(() => {
        request("http://localhost:3001/filtersColor")
            .then(data => setFilters(data))
        // eslint-disable-next-line
    }, []);

    const renderSelect = filters.map(({ elementName }) => {
        return (
            <option key={uuidv4()} value={elementName}>{elementName}</option>
        )
    })

    // --------------------------------------------------------
    const onValueChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    // --------------------------------------------------------
    const onSubmiting = (e) => {
        e.preventDefault()
        const newItem = {
            id: uuidv4(),
            name: state.name,
            description: state.description,
            element: state.element
        }

        const newList = [...heroes, newItem];
        dispatch(heroesAdded(newList));

        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newItem));

        setState({
            name: '',
            description: '',
            element: ''
        })
    }

    //! --------------------------------------------------------
    return (
        <form className="border p-4 shadow-lg rounded"
            onSubmit={onSubmiting}
        >
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input required type="text" className="form-control" id="name" placeholder="Как меня зовут?"
                    name="name"
                    value={state.name}
                    onChange={onValueChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea required className="form-control" id="text" placeholder="Что я умею?"
                    name="description"
                    value={state.description}
                    onChange={onValueChange}
                    style={{ "height": '130px' }} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select required className="form-select" id="element"
                    name="element"
                    onChange={onValueChange}
                    value={state.element}>

                    {renderSelect}

                </select>
            </div>

            <button type="submit" className="btn btn-primary"
            >Создать</button>
        </form>
    )
}

export default HeroesAddForm;