import React, { useState, useEffect } from "react";
import Form from "../Form/Form"
import MadLibResult from "../MadLibResult/MadLibResult";
import './MadLibEntry.css'

const MadLibEntry = ({ madLib }) => {
  

  const [result, setResult] = useState("");
  const [displayResult, setDisplayResult] = useState(false)
  
  const updateDisplay = () => {
    setDisplayResult(true)
  }

  const getResult = (userInputs) => {
    console.log(userInputs)
    const keys = Object.keys(userInputs)
    let str = madLib.parsedQuote
    keys.forEach(key => {
      str = str.replaceAll(key, userInputs[key])
    })
    console.log(str)
    setResult(str)
    updateDisplay()
  }
  

  return (
    <div className="play-container">
      <Form wordsNeeded={madLib.wordsNeeded} partsOfSpeech={madLib.partsOfSpeech} getResult={getResult}/>
      {displayResult && <MadLibResult result={result}/>}
    </div>
  )
}

export default MadLibEntry