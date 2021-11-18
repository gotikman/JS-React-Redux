import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data }) => {
    //!Перебираєм обєк елементів з бази
    const elements = data.map(item => {
        const { id, ...itemProps } = item;    //! рестр. розбиваэм по залишковому принципу
        return (
            <EmployeesListItem key={id} {...itemProps} />  //! розгортаєм обєкт props
        )
    })


    return (
        <ul className="app-list list-group">

            {elements}
        </ul>
    )
}

export default EmployeesList;