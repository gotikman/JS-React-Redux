import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Усі працівники' },
        { name: 'rise', label: 'На підвищення' },
        { name: 'moreThen1000', label: 'З/П більше 1000$' }
    ];

    //! метод map для формування кнопок на основі даних змінної вище
    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;

// return (
//     <div className="btn-group">
//         <button
//             className="btn btn-light"
//             type="button">
//             Усі працівники
//         </button>

//         <button
//             className="btn btn-outline-light"
//             type="button">
//             На підвищення
//         </button>

//         <button
//             className="btn btn-outline-light"
//             type="button">
//             З/П більше 1000$
//         </button>

//     </div>
// )