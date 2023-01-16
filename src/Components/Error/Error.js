import React from "react";
import PropTypes from 'prop-types';

import './Error.css';

const Error = ({ dismissError }) => {

  return (
    <div className="overlay">
      <div className="error-container">
        <h2>Oops! Something went wrong!</h2>
        <p>Please try again later</p>
        <button className="dismiss-btn" onClick={() => dismissError()}>Dismiss</button>
      </div>
    </div>
  )
}

export default Error

Error.propTypes = {
  dismissError: PropTypes.func.isRequired
}