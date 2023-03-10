import React from "react";
import { Link } from "react-router-dom";

import play from '../../images/play-icon.png';
import smile from '../../images/favorite-icon.png';

import './Options.css';

const Options = () => {
return (
  <div className='home-page-options'>
    <Link to='/play' className='play-link option'>
      <div>
        <img className="play-image" src={play}/>
        <h3 className="option-title">Play!</h3>
      </div>
    </Link>
    <Link to='/favorites' className='favorites-link option'>
      <div>
        <img className="fav-image" src={smile}/>
        <h3 className="option-title">Favorites</h3>
      </div>
    </Link>
  </div>
  ) 
}

export default Options