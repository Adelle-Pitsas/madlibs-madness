import React, { useState, useEffect } from "react";
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import { fetchFavorites } from '../apiCalls';


const Favorites = () => {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchFavorites()
    .then((data) => {
     console.log(data)
     setFavorites(data)
    })
  }, [])

  
  return (
    <div>
      <FavoriteContainer favorites={favorites}/>
    </div>
  )
}

export default Favorites