import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { fetchData } from '../apiCalls';
import { cleanData } from '../util'
import MadLibEntry from '../MadLibEntry/MadLibEntry';
import Options from '../Options/Options';
import Favorites from '../Favorites/Favorites';

function App() {

  const [ madLib, setMadLib ] = useState({
    id: "",
    quote: "",
    parsedQuote: "",
    wordsNeeded: [],
    partsOfSpeech: []
  });
  const [ favorites, setFavorites ] = useState(["Never let the fear of sitting keep you from eating the world - Babe Ruth"])

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
        <Route path='/' element={<Options />}
        />
        <Route path='/play' element={<MadLibEntry madLib={madLib}/>} />
        <Route path='/favorites' element={<Favorites favorites={favorites}/>} />
      </Routes>
    </div>
  )
}

export default App