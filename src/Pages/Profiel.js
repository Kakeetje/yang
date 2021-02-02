import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from "../Context/AuthContext";


export default function Profiel() {
    const { user } = useAuthState();


    return(
    <>
        <h2>Mijn Account</h2>
        <h3>Gegevens</h3>
        { user && (
            <>
                <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                </>
        )}
        <h2>Afgeschermde content voor ingelogde gebruikers</h2>

        <p>Terug naar de <Link to="/">Home</Link></p>
    </>
    );
}
