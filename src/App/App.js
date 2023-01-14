import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { fetchData, postData, fetchFavorites } from '../apiCalls';
import MadLibEntry from '../MadLibEntry/MadLibEntry';
import Options from '../Options/Options';
import Favorites from '../Favorites/Favorites';


function App() {

  const addToFavorites = (madLib) => {
    console.log('posting data...')
    postData(madLib)
  }

  return (
    <div className="App">
      <header className='header'>
        <h1>MadLibs</h1>
      </header>
      <Routes>
        <Route path='/' element={<Options />}
        />
        <Route path='/play' element={<MadLibEntry addToFavorites={addToFavorites}/>} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App