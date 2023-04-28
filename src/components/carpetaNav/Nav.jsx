// import styles from './Nav.module.css';
import SearchBar from '../folderSearchBar/SearchBar';
import { NavLink } from 'react-router-dom';



const Nav = ({ onSearch }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            
        </div>
    )
};

export default Nav; 