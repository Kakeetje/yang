import React from "react";
import GerechtenCards from "./GerechtenCards";


export default function Pokemoncategorien(props) {
    return (
        <div>
            {props.gerecht.types.map((type) => {
                return <GerechtenCards name={props.gerecht.name} type={type.type} />;
            })}
        </div>
    );
}
