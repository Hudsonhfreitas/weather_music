import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container'>
            <span>Weather Music</span>
            <nav>
                <NavLink to="/" >Home</ NavLink>
                <NavLink to="/saved_playlists" activeClassName='active'>Suas playlists</ NavLink>
            </nav>
        </header>
    )
}

export default Header;