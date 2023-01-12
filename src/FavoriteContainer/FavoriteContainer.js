import React from "react";
import FavCard from "../FavCard/FavCard";


const FavoriteContainer = ({ favorites }) => {
  console.log(favorites)
  const favoriteCards = favorites.map((favorite, index) => {
    return (
      <FavCard 
        madlib={favorite.madLib}
        key={favorite.id}
      />
    ) 
  })

  return (
    <div>
      {favoriteCards}
    </div>
  )
}

export default FavoriteContainer