import React, { useState } from 'react'
import Planet from "../../models/Planet"
import "./Favoriteplanet.css"

type Props = {
  planet: Planet
}

function FavoriteplanetItem({ planet }: Props) {

  return (
    <fieldset>
        <legend><h1>{planet.name}</h1></legend>
        <button>remove planet</button>
      </fieldset>
  )
  
}

export default FavoriteplanetItem;