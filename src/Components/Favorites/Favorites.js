import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { fetchFavorites, deleteFavorite } from '../../apiCalls';

import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";


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