import React, { useState } from 'react'
import Planet from "../../models/Planet"
import "./Favoriteplanet.css"

function Favoriteplanet() {

  return (
    <article className="favorite-page">
      <section className='favorite-test'>
        <h1>test planet #1</h1>
        <button>remove planet</button>
      </section>
      
      <fieldset>
        <legend><h1>test planet #3</h1></legend>
        <button>remove planet</button>
      </fieldset>
    </article>
  )
  
}

export default Favoriteplanet;