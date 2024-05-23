import React from 'react';
import Planet from "../../models/Planet";

type Props = {
  favoritePlanets: Planet[]
};

function Favoriteplanet({ favoritePlanets }: Props) {
  return (
    <div>
      <h1>Favorite Planets</h1>
      <ul>
        {favoritePlanets.map(planet => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favoriteplanet;
