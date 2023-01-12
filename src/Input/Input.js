import React, { useState, useEffect, useRef } from "react";
import './Input.css'

const Input = ({ placeholder, matchingWord, id, handleWord}) => {

  const[ userInput, setUserInput ] = useState('')

  const updateState = (event) => {
    setUserInput(event.target.value)
  }

  const submitWord = (event) => {
    handleWord(event, userInput)
  }

  return (
    <div 
      className="input"
      name={matchingWord}
      >
      <input
       type={'text'}
       placeholder={placeholder}
       value={userInput}
       onChange={(event) => updateState(event)}
      />
      <button className="submit-word-btn" name={matchingWord} onClick={(event) => {submitWord(event)}}>Submit Word</button>
    </div>
  )
}

export default Input