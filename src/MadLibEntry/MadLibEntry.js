import React, { useState, useEffect } from "react";
import Form from "../Form/Form"
import MadLibResult from "../MadLibResult/MadLibResult";
import './MadLibEntry.css'

const MadLibEntry = ({ madLib, addToFavorites }) => {
  
  const [result, setResult] = useState({});
  const [displayResult, setDisplayResult] = useState(false)
  
  const updateDisplay = () => {
    setDisplayResult(true)
  }

  const getResult = (userInputs) => {
    console.log(userInputs)
    console.log(madLib)
    const keys = Object.keys(userInputs)
    let str = madLib.parsedQuote
    console.log(str)
    keys.forEach(key => {
      str = str.replaceAll(key, userInputs[key])
    })
    console.log(str)
    setResult({result: str, isFavorited: false})
    updateDisplay()
  }
  
  const favoriteResult = () => {
    setResult({...result, isFavorited: true})
  }

  useEffect(() => {
    result.isFavorited && addToFavorites(result)
  }, [result.isFavorited])

  return (
    <div className="play-container">
      <Form wordsNeeded={madLib.wordsNeeded} partsOfSpeech={madLib.partsOfSpeech} getResult={getResult}/>
      {displayResult && <MadLibResult result={result} favoriteResult={favoriteResult}/>}
    </div>
  )
}

export default MadLibEntry