import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { fetchData, postData, fetchFavorites } from '../apiCalls';
import MadLibEntry from '../MadLibEntry/MadLibEntry';
import Options from '../Options/Options';
import Favorites from '../Favorites/Favorites';
import PageNotFound from '../PageNotFound/PageNotFound'


function App() {

  const addToFavorites = (madLib) => {
    console.log('posting data...')
    postData(madLib)
  }

  const { pathname } = useLocation()

  const displayNavButton = pathname === '/play' ? <Link to='/favorites' > <button className='nav-button'>See Favorites</button></Link> : <Link to='/'> <button className='nav-button'>Home</button></Link>
  
  
  return (
    <div className="App">
      <header className='header'>
        <h1>Mobile MadLibs</h1>
        <div className='nav-button-area'>{pathname !== '/' ? displayNavButton : null}</div>
      </header>
      <Routes>
        <Route path='/' element={<Options />}
        />
        <Route path='/play' element={<MadLibEntry addToFavorites={addToFavorites}/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App