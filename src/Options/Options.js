import React from "react"
import './Options.css'
import { Link } from "react-router-dom"

const Options = () => {
return (
  <div className='home-page-options'>
    <Link to='/play' className='play-link option'>
      <div>
        <h3>Play!</h3>
      </div>
    </Link>
    <Link to='/favorites' className='favorites-link option'>
      <div>
        <h3>Favorites</h3>
      </div>
    </Link>
  </div>
  ) 
}

export default Options