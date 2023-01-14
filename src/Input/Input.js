import React, { useState, useEffect, useRef } from "react";
import './Input.css'

const Input = ({ placeholder, wordNeeded, id, handleWord}) => {

  const[ userInput, setUserInput ] = useState('')
  const [ userError, setUserError] = useState(false)
  const[ submit, setSubmit ] = useState(false)

  const updateState = (event) => {
    setUserInput(event.target.value)
  }

  const submitWord = (event) => {
    if(userInput !== "") {
      handleWord(event, userInput)
      setSubmit(true)
      setUserError(false)
    } else {
      setUserError(true)
    }
  }

  return (
    <div 
      className="input"
      name={wordNeeded}
      >
      <input
        disabled={submit ? "disabled" : null}
        type={'text'}
        placeholder={placeholder}
        value={userInput}
        onChange={(event) => updateState(event)}
      />
      {userError && <p className="input-error">Please enter your word</p>}
      <button className={submit ? "submit-word-btn disabled-btn": "submit-word-btn"} name={wordNeeded} onClick={(event) => {submitWord(event)}}>Submit Word</button>
    </div>
  )
}

export default Input