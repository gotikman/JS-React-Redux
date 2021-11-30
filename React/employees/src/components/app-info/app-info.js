
import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Облік працівників в компанії</h1>
            <h2>Загальна кількість працівникців: {props.employees}</h2>
            <h2>Премію отримають: {props.increase}</h2>
        </div>
    )
}

export default AppInfo;