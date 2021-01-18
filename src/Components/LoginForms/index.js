import React from 'react'

export default function LoginForm(){
    return <form>
        <label htmlFor="userName">Gebruikersnaam</label>
        <input name={"userName"} type="text"/>
        <label htmlFor="password">Wachtwoord</label>
        <input name={"password"} type="password"/>
        <input type="submit" />
    </form>
}