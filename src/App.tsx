import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Planets from "./components/Planets/Planets"
import Planetdetails from './components/planetsdetails/PlanetDetails'
import Planet from "./models/Planet"
import Favoriteplanet from './components/Favoriteplanet/Favoriteplanet'


function App() {
  const [key, setKey] = useState<string>("")
  const [planetList, setPlanetList] = useState<Planet[]>([])


  useEffect(() => {
    axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
      .then(response => {
        setKey(response.data.key)
      })
  }, [])

  useEffect(() => {
    if (key) {
      axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        headers: { 'x-zocom': key }
      })
        .then(response => {
          setPlanetList(response.data.bodies);
        })
        .catch(error => console.log(error));
    }
  }, [key]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Planets planets={planetList} />} />
        <Route path="/planet/details/:id" element={<Planetdetails planetList={planetList} />} />
      </Routes>
    </div>
  );
}

export default App;
