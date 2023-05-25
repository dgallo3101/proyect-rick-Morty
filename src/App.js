import './App.css';
// import Card from './components/carpetaCard/Card';
import Cards from './components/carpetaCards/Cards.jsx';
import Nav from './components/carpetaNav/Nav';
import About from './components/carpetaAbout/About';
import Detail from './components/folderDetail/Detail';
import Form from './components/folderForms/Forms';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';




const email = 'dgallo312001@gmail.com';
const password = '123abc';

function App() {

   const location = useLocation();

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   const [access, setAcces] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAcces(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(response => response.data)
         .then((data) => {
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

         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
         }

         <Routes>

            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />}/>

         </Routes>

      </>

   );
}



export default App;
