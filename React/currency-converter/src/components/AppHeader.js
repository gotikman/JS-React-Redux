
const AppHeader = (props) => {

    return (
        <header className="header">
            <div className="header_currency">USD: {props.usd}</div>
            <div className="header_currency">EUR: {props.eur}</div>
        </header>
    )
}

export default AppHeader;