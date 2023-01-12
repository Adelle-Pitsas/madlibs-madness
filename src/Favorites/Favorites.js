import React from "react";
import FavCard from "../FavCard/FavCard";


const Favorites = ({ favorites }) => {
  const favoriteCards = favorites.map((favorite, index) => {
    return <FavCard 
      madlib={favorite}
      key={index}
    />
  })

  return (
    <div>
      {favoriteCards}
    </div>
  )
}

export default Favorites