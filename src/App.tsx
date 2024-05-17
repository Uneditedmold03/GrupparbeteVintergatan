import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import "./App.css"

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
    .then(response => {
      setKey(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
      headers: { 'x-zocom': "solaris-7BTxHCyHhzIME5TI" }
    }).then(response1 => {
      setData(response1.data);
    })
    .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if(bodiesList){
      const planetList : planetType[] = [...bodiesList.bodies]
      console.log(planetList)
    }
  }, [bodiesList])

  return (
    <div className="app">
      
    </div>
  )
}

export default App
