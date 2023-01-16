import React, { useState, useEffect } from "react";
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import PropTypes from 'prop-types';
import { fetchFavorites, deleteFavorite } from '../apiCalls';


const Favorites = ({ triggerError }) => {

  const [ favorites, setFavorites ] = useState([])

  const removeFavorite = (id) => {
    deleteFavorite(id)
    .then(data => {
      console.log(data)
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

Favorites.propTypes = {
  triggerError: PropTypes.func.isRequired
}