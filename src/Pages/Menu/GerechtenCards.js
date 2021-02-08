import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GerechtenCards.css';
import SideBar from "../../Components/SideBar/SideBar";

export default function GerechtenCards(props) {
    const [gerecht, setGerecht] = useState();

    useEffect(() => {
        async function getGerechtData() {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
            setGerecht(result.data);
        }

        getGerechtData();

    },[props.name]);

    console.log(gerecht?.types);

    return (
        <div className="card">
        <h1>{gerecht?.name}</h1>
        <img
            className="sprite"
            alt={gerecht?.name}
            src={gerecht?.sprites.front_default}
        />
        <div className="allergens">
            {gerecht?.stats.map((stat) => {
                return (
                    <div key={gerecht.name + stat.stat.name} className="stat">
                        {stat.stat.name}
                        <progress value={stat.base_stat} max={100} />
                    </div>
                )
            })}

        </div>
            {gerecht?.types.map(type => {
                return (
                    <button key={gerecht.name + type.type.name}>
                        {type.type.name}
                    </button>
                )
            })}
        </div>
    );
}


