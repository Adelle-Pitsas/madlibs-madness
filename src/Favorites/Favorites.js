import React, { useState, useEffect } from "react";
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import { fetchFavorites, deleteFavorite } from '../apiCalls';


const Favorites = () => {

  const [favorites, setFavorites] = useState([])

  const removeFavorite = (id) => {
    deleteFavorite(id)
    .then(data => setFavorites(data))
  }


  useEffect(() => {
    fetchFavorites()
    .then((data) => {
     console.log(data)
     setFavorites(data)
    })
  }, [])

  
  return (
    <div>
      <FavoriteContainer favorites={favorites} removeFavorite={removeFavorite}/>
    </div>
  )
}

export default Favorites