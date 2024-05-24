import React, { useState } from 'react'
import Planet from "../../models/Planet"
import "./Favoriteplanet.css"
import { Link } from 'react-router-dom'

type Props = {
  planet: Planet,
  toggleFavoriteList: (id: number) => void
}

function FavoriteplanetItem({ planet, toggleFavoriteList }: Props) {

  return (
    // <fieldset>
    //     <legend><h1>{planet.name}</h1></legend>
    //     <button onClick={() => toggleFavoriteList(planet.id)}>remove planet</button>
    //     <Link to={'/planet/details/' + planet.id}><button>read more</button></Link>
    //   </fieldset>

    <section className="fav-planet">
      <h1 id="text1">{planet.name}</h1>
      <h2 className="text">{planet.latinName}</h2>
      <p>{planet.desc}</p>
      <br />
      <hr />
      <br />

      <button id="btn-toggle" onClick={() => toggleFavoriteList(planet.id)}>Remove planet</button>
      <Link to={'/planet/details/' + planet.id}><button id="btn-readmore">Read more</button></Link>
    </section>


  )

}

export default FavoriteplanetItem;