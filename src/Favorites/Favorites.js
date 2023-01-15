import React, { useState, useEffect } from "react";
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import { fetchFavorites, deleteFavorite } from '../apiCalls';
import Error from "../Error/Error";


const Favorites = ({ triggerError }) => {

  const [ favorites, setFavorites ] = useState([])

  const removeFavorite = (id) => {
    deleteFavorite(id)
    .then(data => {
      setFavorites(data)
    })
    .catch(response => {
      console.log(response.status)
      triggerError()
    }) 
  }


  useEffect(() => {
    fetchFavorites()
    .then((data) => {
     console.log(data)
     setFavorites(data)
    })
    .catch(response => {
      console.log(response.status)
      triggerError()
    }) 
  }, [])

  
  return (
    <div>
      <FavoriteContainer favorites={favorites} removeFavorite={removeFavorite}/>
    </div>
  )
}

export default Favorites