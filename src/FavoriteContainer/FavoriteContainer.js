import React from "react";
import FavCard from "../FavCard/FavCard";
import PropTypes from 'prop-types';
import './FavoriteContainer.css'


const FavoriteContainer = ({ favorites, removeFavorite }) => {
  
  const favoriteCards = favorites.map((favorite, index) => {
    return (
      <FavCard 
        userMadlib={favorite.quote}
        favorited={favorite.isFavorited}
        removeFavorite={removeFavorite}
        key={favorite.id}
        id={favorite.id}
      />
    ) 
  })

  return (
    <div className="card-container">
      {favorites.length === 0 && <h2>You don't have any favorites. Go play and favorite some mad libs!</h2>}
      {favoriteCards}
    </div>
  )
}

export default FavoriteContainer

FavoriteContainer.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFavorite: PropTypes.func.isRequired
}