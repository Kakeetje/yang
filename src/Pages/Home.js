import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, useAuthState } from "../Context/AuthContext";

export default function Home() {
    const { isAuthnticated } = useAuthState();

    return (
       <>
        <h2>Welkom bij Yang Yang Sushi Eindhoven</h2>

    <p>Bestel nu online en maak een account aan om punten te kunnen sparen</p>
           <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
           <p>Je kunt ook <Link to="/LoginForms">inloggen</Link> of jezelf <Link to="/RegisterForms">registeren</Link> als je nog geen account hebt.</p>
    <p></p>
       </>
    )}

