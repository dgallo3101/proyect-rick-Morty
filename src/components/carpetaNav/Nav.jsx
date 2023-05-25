// import styles from './Nav.module.css';
import SearchBar from '../folderSearchBar/SearchBar';
import Favorites from '../Favorites/Favorites';
import { NavLink } from 'react-router-dom';



const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
};

export default Nav; 