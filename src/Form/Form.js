import React, { Component, useState, useEffect } from "react";
import Input from "../Input/Input";
import './Form.css'

const Form = ( {wordsNeeded, updateDisplay, partsOfSpeech, getResult} ) => {
  
  const [userInputs, setUserInputs] = useState(wordsNeeded.reduce((acc, element) => {
      acc[element] = ""
      return acc
    }, {}))

  const handleWord = (event, input) => {
    setUserInputs({...userInputs, [event.target.name]: input})
  }

  const sendWords = () => {
    getResult(userInputs)
    updateDisplay()
  }
  
  const inputs = partsOfSpeech.map((element, index) => {
    const wordNeeded = wordsNeeded[index]
    return <Input placeholder={element} matchingWord={wordNeeded} id={index} key={index} handleWord={handleWord}/>
  })

  return(
    <div className="mad-lib-entry">
      <div className="inputs">
        {inputs}
      </div>
      <button className="submit" onClick={() => sendWords()}>Create your Mad Lib</button>
    </div>
  )
}

export default Form

