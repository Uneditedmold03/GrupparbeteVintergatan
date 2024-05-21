import React, { useState } from 'react'
import "./Planets.css"
import Planet from "../../models/Planet"
import PlanetItem from './PlanetItem'

type Props = {
    planets: Planet[]
}

function Planets({ planets }: Props) {
    const [title, setTitle] = useState('Solaris Space Center')

    function cangeTitle(newTitle : string){
        setTitle(newTitle)
    }

    return (
        <section className='backgrund'>
            <h1 className='header-text'>{title}</h1>
            <article className='planet-list'>
            {
                planets.map(planet => {
                    return <PlanetItem key={planet.id} cangeTitle={cangeTitle} planet={planet}/>
                })
            }
            </article>
        </section>
    )
}

export default Planets;