import React, {useState} from "react";
import Input from "../Input/Input";
import MadLibResult from "../MadLibResult/MadLibResult";
import './MadLibEntry.css'

const MadLibEntry = ({ madLib }) => {
  const [result, setResult] = useState("");
  const [userInputs, setUserInputs] = useState([])
  const [displayResult, setDisplayResult] = useState(false)

  // const handleChange = () => {
  //   setUserInputs
  // }

  const submitWords = (event) => {
    console.log("click")
    setDisplayResult(true)
  }
  
  const inputs = madLib.partsOfSpeech.map((element, index) => {
    return <Input placeholder={element} id={index} key={index} />
  })
  

  return (
    <div className="mad-lib-entry">
      <div className="inputs">
      {inputs}
      </div>
      <button className="submit" onClick={(event) => submitWords(event)}>Create your Mad Lib</button>
      {displayResult && <MadLibResult />}
    </div>
  )
}

export default MadLibEntry