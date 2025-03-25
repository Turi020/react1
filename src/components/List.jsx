import React from "react";

export default function List({elements}){
    return(
        <ul className="list">
             {elements.map((element, index) => (
                <li key={index}>{element}</li> 
            ))}     
        </ul>

    )
}   