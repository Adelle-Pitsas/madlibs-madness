import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchData } from '../apiCalls';
import { cleanData } from '../util'
import MadLibEntry from '../MadLibEntry/MadLibEntry';

function App() {

  const [ madLib, setMadLib ] = useState({
    id: "",
    quote: "",
    parsedQuote: "",
    wordsNeeded: [],
    partsOfSpeech: []
  });

  useEffect(() => {
    fetchData()
    .then(data => {
      setMadLib(cleanData(data))
      console.log(madLib)
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
      <Routes>
        <Route path='/' element={<MadLibEntry madLib={madLib}/>} />
      </Routes>
    </div>
  )
}

export default App