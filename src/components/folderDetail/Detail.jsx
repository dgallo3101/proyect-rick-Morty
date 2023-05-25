import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Detail.module.css'



const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <>
            <div className={styles.divContainer}>
                <h1>{character.name}</h1>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Wubba lubba dub dub! I'm {character.name}, and I'm happy to have you here in this plane of existence. I hope you're ready to embark on an epic adventure with me. Let's go, Morty! </p>
            </div>

            <div className={styles.divImagen}>
                <img src={character.image} alt={character.name} />
            </div>
        </>
    );
};

export default Detail;