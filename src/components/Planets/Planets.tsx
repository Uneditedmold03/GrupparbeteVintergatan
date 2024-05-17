import React from 'react'
import "./Planets.css"
import Planet from "../../models/Planet"

type Props = {
    planets: Planet[]
}

function Planets({ planets }: Props) {
    return (
        <div>Planets

            <h1>Planets</h1>
            {
                planets.map(planet => {
                    return <p>{planet.name}</p>
                })
            }
        </div>
    )
}

export default Planets;