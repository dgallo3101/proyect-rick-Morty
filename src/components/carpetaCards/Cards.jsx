import Card from "../carpetaCard/Card";
import styles from './Cards.module.css'


 function Cards({characters, onClose}) {
   

   return (
      <div className = {styles.div}>
         {
            characters.map(({id, name, species, gender, image, status, origin})=>{
               return  <Card className = {styles.item}
                  key =  {id}
                  id={id}
                  name = {name}
                  status ={status}
                  species ={species}
                  gender ={gender}
                  origin ={origin.name}
                  image = {image}
                  onClose={onClose}

               />
               
            })
         }
      </div>
   )
     
}

export default Cards;