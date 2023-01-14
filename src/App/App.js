import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { fetchData, postData, fetchFavorites } from '../apiCalls';
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

  const addToFavorites = (madLib) => {
    console.log('posting data...')
    postData(madLib)
  }

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
      <header className='header'>
        <h1>MadLibs</h1>
      </header>
      <Routes>
        <Route path='/' element={<Options />}
        />
        <Route path='/play' element={<MadLibEntry madLib={madLib} addToFavorites={addToFavorites}/>} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App