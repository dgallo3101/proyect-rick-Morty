import React, { useState, useEffect } from 'react';
import styles from './About.module.css'
import imagen from "./david-foto.jpg"

const About = () => {


  return (
    <>

      <div>
        <img src={imagen} alt="David Gallo" className={styles.imagen} />
      </div>

      <div className={styles.divContainer}>
        {/* <h1>My name is: David</h1> */}
        <p>Hola, bienvenidos a mi aplicación de Rick & Morty. Mi nombre es David Santiago Gallo
          Bohórquez, soy estudiante de Administración y Negocios Internacionales en la Universidad
          del Rosario de Colombia, y desarrollador junior full-stack. Soy una persona con pensamiento
          crítico que siempre busca ofrecer soluciones efectivas uniendo el campo tecnológico a cada
          problema que se me presenta. Desde mi participación como expositor en Expociencia, la
          feria colombiana líder en ciencia, descubrí mi pasión por la tecnología y los negocios. En ese
          proyecto, junto con mi grupo de trabajo, encontramos una gran oportunidad de negocio y
          avance tecnológico en una problemática de movilidad para personas con limitaciones de
          movilidad motriz, desarrollando una silla de ruedas que podía moverse por varios
          obstáculos con facilidad. Desde entonces, la tecnología y los negocios han sido una parte
          integral de mi vida. Esto me motivó a crear mi primer proyecto, esta aplicación de Rick & Morty, y
          a seguir aprendiendo nuevos lenguajes de programación y tecnologías para continuar
          creando soluciones innovadoras.</p>
      </div>
    </>
  );
}

export default About;
