import { useState } from "react";
import validation from "../Validation/Validation";
import styles from './Forms.module.css';

const Form = ({login}) => {
    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    }); 

   const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value  
    })

    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value 
    }))
}

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    } 

   

    return (
        <div className={styles.divContainer}>

        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5bffb50-795a-4fcd-b892-52caa775b601/dewh6ww-b89b1fb9-f9c8-43c2-8f0f-655d464b4693.png/v1/fill/w_500,h_556/rick_and_morty_png_by_trentonxsterling88_dewh6ww-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU2IiwicGF0aCI6IlwvZlwvYTViZmZiNTAtNzk1YS00ZmNkLWI4OTItNTJjYWE3NzViNjAxXC9kZXdoNnd3LWI4OWIxZmI5LWY5YzgtNDNjMi04ZjBmLTY1NWQ0NjRiNDY5My5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.py2SiPjbG7BFPPt5hMGZ7gfV2wICTkO2-CigWX7QPkU" alt="Esperando..." />

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="ingrese su email" name="email" value={userData.email} onChange={handleChange}/>

            {errors.email && <p>{errors.email}</p>}
            <hr />

            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="ingrese su contraseña" name="password" value={userData.password} onChange={handleChange}/>

            {errors.password && <p>{errors.password}</p>}
            <hr />
            <button>Submit</button>
        </form>
        </div>
    )
};

export default Form;