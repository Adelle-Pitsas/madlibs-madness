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
  

  return (
    <div>
      <Form wordsNeeded={madLib.wordsNeeded} partsOfSpeech={madLib.partsOfSpeech} updateDisplay={updateDisplay}/>
      {displayResult && <MadLibResult />}
    </div>
  )
}

export default MadLibEntry