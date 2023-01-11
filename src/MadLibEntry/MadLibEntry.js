import React from "react";
import Input from "../Input/Input";
import './MadLibEntry.css'

const MadLibEntry = ({ madLib }) => {
  console.log(madLib)
  const partsOfSpeech = madLib.partsOfSpeech
  const inputs = partsOfSpeech.map((element) => {
    return <Input placeholder={element} />
  })

  return (
    <div className="mad-lib-entry">
      <div className="inputs">
      {inputs}
      </div>
      <button className="submit">Create your Mad Lib</button>
    </div>
  )
}

export default MadLibEntry