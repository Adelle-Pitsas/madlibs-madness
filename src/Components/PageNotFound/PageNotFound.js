import React from "react";
import { Link } from "react-router-dom";

import './PageNotFound.css';

const PageNotFound = () => {

  return (
    <div className="not-found-container">
      <h2>Oops! This page doesn't exist</h2>
      <p>Check the url and try again <br />~OR~<br />Click the button below to be brought back to the home page</p>
      <Link to="/">
        <button className="go-home-btn">Go Home</button>
      </Link>
    </div>
  )
}

export default PageNotFound;