import React from "react";
import './MadLibResult.css'

const MadLibResult = ({ result }) => {
  
  return (
    <div className="result-container">
      <h3>{result}</h3>
      <button className="favorite-button">😂</button>
    </div>
  )
}

export default MadLibResult