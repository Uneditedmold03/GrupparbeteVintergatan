import React, { useState } from 'react'
import Planet from "../../models/Planet"
import "./Favoriteplanet.css"
import FavoriteplanetItem from './FavoriteplanetItem'
import { Link } from 'react-router-dom'

type Props = {
  favoriteList: Planet[]
  toggleFavoriteList: (id: number) => void
}

function Favoriteplanet({ favoriteList, toggleFavoriteList }: Props) {

  if (favoriteList.length == 0) {
    return (
      <div>

        <Link to={'/'}><button className='front-page'>←</button></Link>

        <article className="favorite-page">
            <h1 id="text2">No planets are favorited</h1>
        </article>

      </div>
    )
  }

  return (
    <article className="favorite-page1">
      {/* <h1 className="button-frontpage">← ↩</h1> */}
      <div>
        <Link to={'/'}><button className='front-page'>←</button></Link>
      </div>

      {
        favoriteList && favoriteList.map(planet => {
          return <FavoriteplanetItem key={planet.id} planet={planet} toggleFavoriteList={toggleFavoriteList} />
        })
      }
    </article>
  )

}

export default Favoriteplanet;