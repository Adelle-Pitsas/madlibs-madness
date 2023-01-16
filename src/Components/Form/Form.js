import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import Input from "../Input/Input";

import './Form.css';

const Form = ({ wordsNeeded, partsOfSpeech, getResult }) => {

  const [userInputs, setUserInputs] = useState({})
  const [readyToSubmit, setReadyToSubmit ] = useState(false)
  const [ isSubmitted, setIsSubmitted ] = useState(false)
  const [ updatedWords, setUpdatedWords ] = useState([])

  const handleWord = (event, input) => {
    setUserInputs({...userInputs, [event.target.name]: input})
    setUpdatedWords([...updatedWords, event.target.name])
  }

  const inputs = partsOfSpeech.map((element, index) => {
    const wordNeeded = wordsNeeded[index]
    return <Input placeholder={element} wordNeeded={wordNeeded} id={index} key={index} handleWord={handleWord}/>
  })

  const sendWords = () => {
    getResult(userInputs)
    setIsSubmitted(true)
  }

  useEffect(() => {
   if(updatedWords.length === wordsNeeded.length && wordsNeeded.length !== 0) {
    setReadyToSubmit(true)
   }
  }, [updatedWords])
  
  

  const button = readyToSubmit && <button 
  className={isSubmitted ? "submit disabled-btn" : "submit"} onClick={() => sendWords()}>Create your Mad Lib</button>

  return(
    <div className="mad-lib-entry">
      <h3>Play!</h3>
      <div className="inputs">
        {inputs}
      </div>
      {!isSubmitted && button}
    </div>
  )
}

export default Form

Form.propTypes = {
  wordsNeeded: PropTypes.arrayOf(PropTypes.string).isRequired,
  partsOfSpeech: PropTypes.arrayOf(PropTypes.string).isRequired,
  getResult: PropTypes.func.isRequired
}
