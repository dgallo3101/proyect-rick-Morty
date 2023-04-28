import './App.css';
// import Card from './components/carpetaCard/Card';
import Cards from './components/carpetaCards/Cards.jsx';
import Nav from './components/carpetaNav/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';






function App() {

  

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
           alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id));
      setCharacters(charactersFiltered)
   }

   return (
      <> 
         <Nav onSearch = {onSearch} />
         <div className='App'>
            <Cards characters={characters} onClose= {onClose} />
         </div>
      </>
   );
}



export default App;
