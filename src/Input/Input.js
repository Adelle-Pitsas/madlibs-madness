import React from "react";
import './Input.css'

const Input = ({ placeholder, id }) => {
  return (
   <input
    className="input"
    name={placeholder}
    placeholder={placeholder}
   />
  )
}

export default Input