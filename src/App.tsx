import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import keyType from './models/keyType'
import bodiesType from './models/bodiesType'
import planetType from './models/planetType'
import Planets from "./components/Planets/Planets"


function App() {
  const [key, setKey] = useState<keyType | null>(null)
  const [bodiesList, setBodiesList] = useState<bodiesType>()
  const [planetList, setPlanetList] = useState<planetType[]>([])


  useEffect(() => {
    axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
    .then(response => {
      setKey(response.data)
    })
  }, [])

  useEffect(() => {
    if(key){
      axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        headers : { 'x-zocom' : key.key }
      }).then(keyResponse => {
        console.log(keyResponse.data)
        setBodiesList(keyResponse.data)
      })
      .catch(error => console.log(error))
    }
  }, [key])

  useEffect(() => {
    if(bodiesList){
      setPlanetList([...bodiesList.bodies])
      console.log(planetList)
    }
  }, [bodiesList])

  return (
    <div className="app">
      <Routes>

        <Route path="/" element={<Planets planets={planetList} />} />

      </Routes>
    </div>
  );
}

export default App