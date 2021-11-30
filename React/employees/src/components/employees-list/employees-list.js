import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
    //!Перебираєм обєк елементів з бази
    const elements = data.map(item => {
        const { id, ...itemProps } = item;    //! рестр. розбиваэм по залишковому принципу
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}                       //! розгортаєм обєкт props
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;