import React, { useState, useEffect } from 'react';
import axios from "axios";
import GerechtenCards from './GerechtenCards';
import './Menu.css';
import Chopsticks from '../../Assets/Chopsticks-for-Loading.gif';

export default function Menu() {
    const [gerechten, setGerechten] = useState(null);
    const [pagina, setPagina] = useState(0);
    const [status, setStatus] = useState("loading");

    useEffect(()=> {

        async function getGerechten() {
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina}`);
                setGerechten(response.data.results);
                setStatus("done loading");
            } catch (error) {
                setStatus("error");

            }
        }

        getGerechten();

    },[pagina]);

    if (status === "loading") {
        return <img src={Chopsticks} height="250px"/>;
    }  else if (status === "error") {
        return <h1>O jee de pokemons zijn ontsnapt, druk up refresh</h1>;
    } else {
        return (
        <>
            <div className="Menu">
                <h1>Bekijk onze Menu</h1>
            </div>
            <div className="Gerechten">
                <button disabled={pagina === 0} onClick={() => setPagina(pagina - 20)}>
                    Vorige
                </button>
                <button disabled={pagina === 1100} onClick={() => setPagina(pagina + 20)}>
                    Volgende
                </button>
                {gerechten?.map((gerecht) => {
                    return <GerechtenCards key={gerecht.name} name={gerecht.name} />
                })}
            </div>
        </>
        );
    }
    }
