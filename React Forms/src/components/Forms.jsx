import { useState } from "react";
import style from "./Forms.module.css"

const validate = (form, setErrors, errors) => {
    if(!form.email) setErrors({...errors, email: "email vacio"})
    else {
        setErrors({...errors, email: ""})
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) setErrors({...errors, email:""})
        else setErrors({...errors, email:"email inválido"})
    }
}

const Form = () => {

    // const [username, setUsername] = useState ('');
    // const [password, setPassword] = useState ('');

    //*simplificado
    const [form,setForm] = useState ({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        pasword: "",
    })



    const handleChange = (event) => {
        // if ( event.taget.name === "username" ){
        //     setForm({...form, username: event.target.value});
        // }
        // if ( event.taget.name === "password" ){
        //     setForm({...form, username: event.target.value});
        // }

        //* Simplificado
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form,[property]: value}); //bracket notation para la propiedad del objeto
        validate({...form,[property]: value}, setErrors, errors); // le paso lo mismo que setie en form porque sino por la demora le estoy pasando un estado anterior
    }

    const submitHandler = (event) => {
        event.preventDefault(); // para evitar recargar la pagina
        alert("LOGIN EXITOSO");
    }

    

    return (
        <>
            <form onSubmit={submitHandler} >
                <div>
                    <label>Username:</label>
                    <input name="email" value={form.email} onChange={handleChange} className={errors.email ? style.error : style.sucess} />
                    <br/>
                    <span>{errors.email}</span>
                </div>
                <div>
                    <label>Password:</label>
                    <input name="password" value={form.password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Form;