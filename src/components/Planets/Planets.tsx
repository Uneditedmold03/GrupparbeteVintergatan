import React, { useState } from 'react'
import "./Planets.css"
import Planet from "../../models/Planet"
import PlanetItem from './PlanetItem'
import { Link } from 'react-router-dom'

type Props = {
    planets: Planet[]
}

function Planets({ planets }: Props) {
    const [title, setTitle] = useState('Solaris Space Center')

    function changeTitle(newTitle: string) {
        setTitle(newTitle)
    }

    return (
        <section className='backgrund'>
            <h1 className='link-text'><Link to={'/favorite/planets'} className='link-tagg'>Favorites:⭐</Link></h1>
            <header className='header-nav'>
                <h1 className='header-text'>{title}</h1>
            </header>
            <article className='planet-list'>
                {
                    planets.map(planet => {
                        return <PlanetItem key={planet.id} changeTitle={changeTitle} planet={planet} />
                    })
                }
            </article>
        </section>
    )
}

export default Planets;