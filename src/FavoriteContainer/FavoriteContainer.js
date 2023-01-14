import React from "react";
import FavCard from "../FavCard/FavCard";
import './FavoriteContainer.css'


const FavoriteContainer = ({ favorites, removeFavorite }) => {
  console.log(favorites)
  const favoriteCards = favorites.map((favorite, index) => {
    return (
      <FavCard 
        madlib={favorite.quote}
        favorited={favorite.isFavorited}
        removeFavorite={removeFavorite}
        key={favorite.id}
        id={favorite.id}
      />
    ) 
  })

  return (
    <div className="card-container">
      {favoriteCards}
    </div>
  )
}

export default FavoriteContainer