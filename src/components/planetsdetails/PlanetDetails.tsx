import React, { useEffect, useState } from 'react'
import "./PlanetDetails.css"
import planetType from '../../models/planetType'
import { useParams } from 'react-router-dom'

type Props = {
  planetList: planetType[]
}

function Planetdetails({ planetList }: Props) {
  const [planet, setPlanet] = useState<planetType | null>(null)
  const { id } = useParams();

  useEffect(() => {
    if(id !== undefined){
      const foundPlanet = planetList.find(pl => pl.id === parseInt(id))
      if(foundPlanet !== undefined){
        setPlanet(foundPlanet)
      }
    }
  }, [])

  if(planet == undefined) return <h1>invalid planet id</h1>

  return (
    <h1>{planet.name}</h1>
  )
}

export default Planetdetails