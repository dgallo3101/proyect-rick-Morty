import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card({ id, name, gender, onClose, species, image, origin, status, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      }
      else {
         setIsFav(true);
         addFav({ id, name, image, onClose })
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>

         

         <button onClick={() => onClose(id)} className={styles.closeButton}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={styles.cardTitle}>{name}</h2>
         </Link>
         <img src={image} alt={name} className={styles.cardImg} />
         <p className={styles.p}>"Get ready Morty, <br />
            here's an epic character <br />
            from the crazy world of Rick & Morty</p>
         {/* <h2 className={styles.cardInfo}>{status}</h2> */}
         {/* <h2 className={styles.cardInfo}>{species}</h2> */}
         {/* <h2 className={styles.cardInfo}>{gender}</h2> */}
         {/* <h2 className= {styles.cardInfo}>{origin}</h2> */}
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }

}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)