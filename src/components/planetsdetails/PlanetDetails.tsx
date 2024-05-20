import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./PlanetDetails.css"
import Planet from "../../models/Planet"

type Props = {
    planets: Planet[]
}

function PlanetDetails({ planets }: Props) {
    const [dataArray, setDataArray] = useState<Planet>({id: 0, type: "", name: "", latinName: "", rotation: null, circumference: null, temp: {day: null, night: null}, distance: null, orbitalPeriod: null, desc: "", moons: []})
    const {id} = useParams();

    useEffect(() => {
        if(typeof id !== "undefined"){
            planets.map(planet => {
                if(planet.id == parseInt(id)){
                    setDataArray(planet)
                }
            })
        }
    }, [])
    return (
        <div>Planets
            <h1>Planets</h1>
            <p>{dataArray.desc}</p>
            {
            //    planets.map(planet => {
            //        return <p>{planet.name}</p>
            //    })
            }
        </div>
    )
}

export default PlanetDetails;