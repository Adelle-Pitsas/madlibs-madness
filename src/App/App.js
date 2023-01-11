import './App.css';
import { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { fetchData } from '../apiCalls';
import { cleanData } from '../util'

function App() {

  const [ madLib, setMadLib ] = useState({});

  useEffect(() => {
    fetchData()
    .then(data => {
      setMadLib(cleanData(data))
    })
    .catch(response => {
      console.log(response.status)
    }) 
  }, [])


  return (
    <div className="App">
      <header>
        <h1>MadLibs</h1>
      </header>
    </div>
  )
}

export default App