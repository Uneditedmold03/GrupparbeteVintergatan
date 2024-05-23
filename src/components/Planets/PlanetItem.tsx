import React from "react";
import Planet from "../../models/Planet"
import './PlanetItem.css'
import { Link } from "react-router-dom";

type Props = {
  changeTitle: (newTitle: string) => void,
  planet: Planet
}

function PlanetItem({ changeTitle, planet }: Props) {
  return (
    <div>
      <Link to={'/planet/details/' + planet.id} className={planet - ${planet.name} planet}
      onMouseLeave={() => changeTitle('Solaris Space Center')}
      onMouseOver={() => changeTitle(planet.name)}>
    </Link >
    </div >

    )
}

export default PlanetItem;