import React from "react";
import planetType from "../../models/planetType";
import './PlanetItem.css'
import { Link } from "react-router-dom";

type Props = {
    cangeTitle: (newTitle: string) => void,
    planet: planetType
}

function PlanetItem({ cangeTitle, planet }: Props){
    return(
        <Link to={'/planet/details/' + planet.id} className={`planet-${planet.name} planet`} 
        onMouseLeave={() => cangeTitle('Solaris Space Center')} 
        onMouseOver={() => cangeTitle(planet.name)}>
            <div ></div></Link>
    )
}

export default PlanetItem;