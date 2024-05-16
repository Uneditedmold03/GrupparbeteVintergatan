import React from 'react'
import "./Planets.css"



type Props = {
    AllPlanets : Planet[];
}

function Planets( { AllPlanets } : Props) {
    return (
        <div>Planets

            <h1>Planets</h1>
            
        </div>
    )
}

export default Planets;