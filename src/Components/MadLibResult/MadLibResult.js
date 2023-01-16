import React from "react";
import PropTypes from 'prop-types';

import { FaSmileBeam } from 'react-icons/fa';

import './MadLibResult.css';

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

MadLibResult.propTypes = {
  result: PropTypes.shape({
    result: PropTypes.string,
    isFavorited: PropTypes.bool
  }).isRequired,
  favoriteResult: PropTypes.func.isRequired
}