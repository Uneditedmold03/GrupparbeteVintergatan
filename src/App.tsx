import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import "./App.css";
import Planets from "./components/Planets/Planets"

function App() {
  const [data, setData] = useState('');
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    axios.post("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys")
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);


  useEffect(() => {
    axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
      headers: { 'x-zocom': "solaris-7BTxHCyHhzIME5TI" }
    }).then(response1 => {
      setData(response1.data);
    })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="app">
      <Routes>

        <Route path="/" element={<Planets planets={dataArray} />} />
        
      </Routes>
    </div>
  );
}

export default App;
