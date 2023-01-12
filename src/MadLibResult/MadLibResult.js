import React from "react";
import './MadLibResult.css'

const MadLibResult = ({ result, addToFavorites }) => {
  
  return (
    <div className="result-container">
      <h3>{result}</h3>
      <button className="favorite-button" onClick={() => addToFavorites(result)}>😂</button>
    </div>
  )
}

export default MadLibResult