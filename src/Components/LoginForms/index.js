import React from 'react';
import { useForm } from "react-hook-form";
import './LoginForm.scss';


export default function LoginForm(){
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        console.log(data);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Gebruikersnaam</label>
        <input name={"userName"} type="text" ref={register}/>
        <label htmlFor="password">Wachtwoord</label>
        <input name={"password"} type="password" ref={register}/>
        <input type="submit" />
    </form>
}