import React, { useState } from 'react'
import Planet from "../../models/Planet"
import "./Favoriteplanet.css"
import FavoriteplanetItem from './FavoriteplanetItem'

type Props = {
  favoriteList: Planet[]
  toggleFavoriteList: (id : number) => void
}

function Favoriteplanet({ favoriteList, toggleFavoriteList }: Props) {

  if(favoriteList.length == 0){
    return(
      <article className="favorite-page">
        <h1>no planets are favorited</h1>
      </article>
    )
  } 

  return (
    <article className="favorite-page">
      <h1><b>←↩</b></h1>
      {
        favoriteList && favoriteList.map(planet => {
          return <FavoriteplanetItem key={planet.id} planet={planet} toggleFavoriteList={toggleFavoriteList}/>
        })
      }
    </article>
  )
  
}

export default Favoriteplanet;