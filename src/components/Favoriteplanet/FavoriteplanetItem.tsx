import React, { useState } from 'react'
import Planet from "../../models/Planet"
import "./Favoriteplanet.css"
import { Link } from 'react-router-dom'

type Props = {
  planet: Planet,
  toggleFavoriteList: (id : number) => void
}

function FavoriteplanetItem({ planet, toggleFavoriteList }: Props) {

  return (
    <fieldset>
        <legend><h1>{planet.name}</h1></legend>
        <button onClick={() => toggleFavoriteList(planet.id)}>remove planet</button>
        <Link to={'/planet/details/' + planet.id}><button>read more</button></Link>
      </fieldset>
  )
  
}

export default FavoriteplanetItem;