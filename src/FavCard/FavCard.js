import React from "react";
import '../Smile/Smile.css'
import { FaSmileBeam } from 'react-icons/fa'


const FavCard = ({ madlib, favorited, removeFavorite, id }) => {


  return (
    <div className="fav-card">
      <h4>{madlib}</h4>
      <button className="favorite-button" onClick={() => removeFavorite(id)}>
          <FaSmileBeam className={favorited ? "favorited" : "unfavorited"}/>
        </button>
    </div>
  )
}

export default FavCard