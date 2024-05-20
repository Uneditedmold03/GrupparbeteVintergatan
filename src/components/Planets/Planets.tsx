import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./Planets.css"
import Planet from "../../models/Planet"
import PlanetDetails from "../planetsdetails/PlanetDetails";

type Props = {
    planets: Planet[]
}

    function Planets({ planets }: Props){
        return(
            <section className="home-page">
                <h1>vintergatan</h1>

                <div>
                    <PlanetDetails
                        planets={planets} />
                </div>
            </section>
        )
    }

export default Planets;