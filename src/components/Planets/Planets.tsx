import React, { useState } from 'react'
import "./Planets.css"
import planetType from '../../models/planetType'

type Props = {
    planets: planetType[]
}

function Planets({ planets }: Props) {
    const [title, setTitle] = useState('Solaris Space Center')

    function cangeTitle(newTitle : string){
        setTitle(newTitle)
    }

    return (
        <section>
            <h1>{title}</h1>
            <article className='planet-list'>
            {
                planets.map(planet => {
                    return <div className={`planet-${planet.name} planet`} 
                                onMouseLeave={() => cangeTitle('Solaris Space Center')} 
                                onMouseOver={() => cangeTitle(planet.name)}></div>
                })
            }
            </article>
        </section>
    )
}

export default Planets;