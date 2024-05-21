import React, { useEffect, useState } from 'react'
import "./PlanetDetails.css"
import Planet from "../../models/Planet"
import { useParams } from 'react-router-dom'

type Props = {
  planetList: Planet[]
}

function Planetdetails({ planetList }: Props) {
  const [planet, setPlanet] = useState<Planet | null>(null)
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      const foundPlanet = planetList.find(pl => pl.id === parseInt(id))
      if (foundPlanet !== undefined) {
        setPlanet(foundPlanet)
      }
    }
  }, [])

  if (planet == undefined) return <h1>invalid planet id</h1>

  return (


    <section className={`planetdetailsbackground`}>

      <div className={`planetdetails planetdetails-${planet.name}`}>

        <article className="planetinfo">
        <h1 className="text">{planet.name}</h1>
        <h2 className="text">{planet.latinName}</h2>
        <p>{planet.desc}</p>

        </article>
  
      </div>

    </section>


  )
}


export default Planetdetails;