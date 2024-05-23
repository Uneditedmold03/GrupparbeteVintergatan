// import React from "react";
// import Planet from "../../models/Planet"
// import './PlanetItem.css'
// import { Link } from "react-router-dom";

// type Props = {
//     changeTitle: (newTitle: string) => void,
//     planet: Planet
// }

// // function PlanetItem({ changeTitle, planet }: Props) {
// //     return (
// //         <Link to={'/planet/details/' + planet.id} className={`planet-${planet.name} planet`}
// //             onMouseLeave={() => changeTitle('Solaris Space Center')}
// //             onMouseOver={() => changeTitle(planet.name)}>
// //             <div ></div></Link>
// //     )
// // }

// function PlanetItem({ changeTitle, planet }: Props) {
//     return (
//       <div>
//         <Link to={'/planet/details/' + planet.id} className={`planet-${planet.name} planet`}
//           onMouseLeave={() => changeTitle('Solaris Space Center')}
//           onMouseOver={() => changeTitle(planet.name)}>
//           <div></div>
//         </Link>
//       </div>
//     )
//   }
  



// export default PlanetItem;

import React from "react";
import Planet from "../../models/Planet"
import './PlanetItem.css'
import { Link } from "react-router-dom";

type Props = {
    changeTitle: (newTitle: string) => void,
    planet: Planet,
    addFavorite: (planet: Planet) => void
}

function PlanetItem({ changeTitle, planet, addFavorite }: Props) {
    return (
        <div>
          <Link to={'/planet/details/' + planet.id} className={`planet-${planet.name} planet`}
            onMouseLeave={() => changeTitle('Solaris Space Center')}
            onMouseOver={() => changeTitle(planet.name)}>
            <div></div>
          </Link>
          <button onClick={() => addFavorite(planet)}>Add to favorites</button>
        </div>
    )
}

export default PlanetItem;
