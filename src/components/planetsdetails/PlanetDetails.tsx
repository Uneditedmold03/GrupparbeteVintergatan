import React, { useEffect, useState } from 'react';
import "./PlanetDetails.css";
import Planet from "../../models/Planet";
import { Link, useParams } from 'react-router-dom';

type Props = {
  planetList: Planet[],
  saveFavoritePlanet: (planet: Planet) => void // Funktion för att spara favoritplanet
};

function Planetdetails({ planetList, saveFavoritePlanet }: Props) {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      const foundPlanet = planetList.find(pl => pl.id === parseInt(id));
      if (foundPlanet !== undefined) {
        setPlanet(foundPlanet);
      }
    }
  }, [id, planetList]);

  if (!planet) return <h1>Invalid planet id</h1>;

  return (
    <section className={`planetdetailsbackground`}>
      <div className={`planetdetails planetdetails-${planet.name}`}>
        <article className="planetinfo">
          <aside className="info-box-btn">
            <h1 className="text">{planet.name}</h1>
            {/* Lägg till knapp för att spara som favorit */}
            <button className='btn' onClick={() => saveFavoritePlanet(planet)}>Save as favorite</button> 
          </aside>
          {/* Övrig planetinformation här */}
        </article>
      </div>
    </section>
  );
}

export default Planetdetails;
