import styles from './SearchBar.module.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SearchBar({ onSearch }) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)

   }


   return (
      <nav className={styles.nav}>

<div className={styles.divButton}>
            <NavLink to='/about'>
               <button className={styles.button}>About</button>
            </NavLink>

            <NavLink to='home'>
               <button>Home</button>
            </NavLink>

            
         </div>

<div className={styles.inputContainer}>
            <input type='search' className={styles.inputSearch} value={id} onChange={handleChange} />
            <button onClick={() => { onSearch(id); setId('') }}>Add</button>
         </div>



         <NavLink to='/favorites' className={styles.favorites}>
               Favorites
            </NavLink>         

         
      </nav>
   );
}

export default SearchBar;