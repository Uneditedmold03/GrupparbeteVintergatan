import React, { useEffect, useState } from 'react'
import "./PlanetDetails.css"
import Planet from "../../models/Planet"
import { Link, useParams } from 'react-router-dom'

type Props = {
  planetList: Planet[],
  toggleFavoriteList: (id: number) => void
  favoriteList: Planet[],
}
function Planetdetails({ planetList, favoriteList, toggleFavoriteList }: Props) {
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

          <div className="buttons">
            <Link to={'/'}><button className='front-page1'>←</button></Link>
            <Link to={"/favorite/planets"}><button className="btn">Go to Favoriteplanets</button></Link>
          </div>

          <aside className="info-box-btn">
            <h1 className="text">{planet.name}</h1>

            <div>
              <button className="btn" onClick={() => toggleFavoriteList(planet.id)}>{favoriteList.some(fp => fp.id === planet.id) ? 'Remove as Favorite' : 'Mark as Favorite'}</button>
            </div>

          </aside>

          <h2 className="text">{planet.latinName}</h2>
          <p>{planet.desc}</p>
          <br />
          <hr />
          <br />

          <aside className="infobox">
            <h3 className="text">OMKRETS</h3>
            <h3 className="text">KM FRÅN SOLEN</h3>
            <p>{planet.circumference} km</p>
            <p>{planet.distance}</p>

            <h3 className="text">MAX TEMPERATUR</h3>
            <h3 className="text">MIN TEMPERATUR</h3>
            <p>{planet.temp.day}</p>
            <p>{planet.temp.night}</p>
          </aside>

          <br />
          <hr />
          <br />


          <aside className="infobox">
            <h3 className="text">MÅNAR</h3>
            <h3></h3>
          </aside>

          <div className="moons">
            <p>{planet.moons && planet.moons.length > 0 ? planet.moons.join(', ') : 'Har ingen måne'}</p>
          </div>

        </article>

      </div>

    </section>


  )
}

export default Planetdetails;