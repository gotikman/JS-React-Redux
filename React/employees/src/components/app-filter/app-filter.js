import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Усі працівники', colored: false },
        { name: 'rise', label: 'На підвищення', colored: false },
        { name: 'moreThen1000', label: 'З/П більше 1000$', colored: true }
    ];

    //! метод map для формування кнопок на основі даних змінної вище
    const buttons = buttonsData.map(({ name, label, colored }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = colored ? { color: 'red' } : null;
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                style={style}
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