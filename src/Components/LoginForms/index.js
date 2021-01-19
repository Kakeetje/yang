import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './LoginForm.scss';


export default function LoginForm(){
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data){
        console.log(data);
    }

    console.log(errors);
    return (
        <>
            <h1>Log in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Gebruikersnaam</label>
        <input name={"userName"} type="text" ref={register({ required: true })}/>
        {errors.userName && <span>This field is required</span>}
        <label htmlFor="password">Wachtwoord</label>
        <input name={"password"} type="password" ref={register({ required: true })}/>
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
    </form>
            <p>Heb je nog geen account? <Link to="/register">Registreer</Link> je dan eerst.</p>
        </>
    );
}