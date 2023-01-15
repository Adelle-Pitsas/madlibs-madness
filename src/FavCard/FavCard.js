import React from "react";
import '../Smile/Smile.css'
import './FavCard.css'
import PropTypes from 'prop-types';
import { FaSmileBeam } from 'react-icons/fa'


const FavCard = ({ userMadlib, favorited, removeFavorite, id }) => {


  return (
    <div className="fav-card">
      <h4>{userMadlib}</h4>
      <button className="favorite-button" onClick={() => removeFavorite(id)}>
          <FaSmileBeam className={favorited ? "favorited" : "unfavorited"}/>
        </button>
    </div>
  )
}

export default FavCard

FavCard.propTypes = {
  userMadlib: PropTypes.string.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

FavCard.defaultProps = {
  favorited: true
}