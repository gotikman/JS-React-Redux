import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/www-react-api">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/www-react-api">Characters</NavLink></li>

                    <li><NavLink
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/www-react-api/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;