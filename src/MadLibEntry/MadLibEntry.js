import React, { useState, useEffect } from "react";
import Form from "../Form/Form"
import MadLibResult from "../MadLibResult/MadLibResult";
import './MadLibEntry.css'
import { fetchData } from '../apiCalls';
import { cleanData } from '../util'
import PropTypes from 'prop-types';


const MadLibEntry = ({ addToFavorites, triggerError }) => {
  
  const [ madLib, setMadLib ] = useState({
    id: "",
    quote: "",
    parsedQuote: "",
    wordsNeeded: [],
    partsOfSpeech: []
  });
  const [result, setResult] = useState({});
  const [displayResult, setDisplayResult] = useState(false)
  

  useEffect(() => {
      getNewMadLib()
  }, [])

  const getNewMadLib = () => {
    console.log(result)
    fetchData()
    .then(data => {
      setMadLib(cleanData(data))
      setDisplayResult(false)
    })
    .catch(response => {
      console.log(response.status)
      triggerError()
    }) 
    
  }

  const updateDisplay = () => {
    setDisplayResult(true)
  }

  const getResult = (userInputs) => {
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
      <div className="new-madlib-button-container">
        <button onClick={() => getNewMadLib()} className="new-madlib-button">New MadLib</button>
      </div>
      <Form key={madLib.id} wordsNeeded={madLib.wordsNeeded} partsOfSpeech={madLib.partsOfSpeech} getResult={getResult} getNewMadLib={getNewMadLib}/>
      {displayResult && <MadLibResult result={result} favoriteResult={favoriteResult}/>}
    </div>
  )
}

export default MadLibEntry

MadLibEntry.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  triggerError: PropTypes.func.isRequired
}