import React from "react";
import './MadLibResult.css';
import '../Smile/Smile.css'
import { FaSmileBeam } from 'react-icons/fa'

const MadLibResult = ({ result, favoriteResult }) => {



  return (
    <div className="result-container">
      <h3>{result.result}</h3>
      <button className="favorite-button" onClick={() => favoriteResult(result)}>
        <FaSmileBeam className={result.isFavorited ? "favorited" : "unfavorited"}/>
      </button>
    </div>
  )
}

export default MadLibResult