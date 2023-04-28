
import styles from './Card.module.css'
export default function Card({id, name, gender, onClose, species, image, origin, status}) {

   return (
      <div className = {styles.card}>
         <button onClick={() => onClose(id)} className = {styles.closeButton}>X</button>
         <h2 className={styles.cardTitle}>{name}</h2>
         <img src={image} alt={name} className ={styles.cardImg}/>
         <h2 className= {styles.cardInfo}>{status}</h2>
         <h2 className= {styles.cardInfo}>{species}</h2>
         <h2 className= {styles.cardInfo}>{gender}</h2>
         {/* <h2 className= {styles.cardInfo}>{origin}</h2> */}
         
      </div>
   );
}
