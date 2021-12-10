import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container'>
            <span>Weather Music</span>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive? "active": ''}>Home</ NavLink>
                <NavLink to="/saved_playlists" className={({ isActive }) => isActive? "active": ''}>Suas playlists</ NavLink>
            </nav>
        </header>
    )
}

export default Header;