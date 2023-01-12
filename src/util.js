export const cleanData = (data) => {
  const randomIndex = getRandomIndex(data.madlibs.length)
  return data.madlibs[randomIndex]
}

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length)
}




// class Form extends Component {
//   constructor() {
//     super()
//     this.state = {
//       userInputs: {},
//       inputs: []
//     }
//   }

//   // inputs = () => { 
//   //   // this.setState(this.props.partsOfSpeech.map((element, index) => {
//   //       return <Input
//   //        placeholder={element} 
//   //        id={index} key={index} 
//   //       //  handleChange={handleChange}
//   //        />
//   //     }))
//   //   }

//   submitWords = (event) => {
//     console.log(this.state.userInputs)
//     // updateDisplay()
//   }

//   componentDidMount() {
//     const map = this.props.wordsNeeded.reduce((acc, element) => {
//       acc[element] = ""
//       return acc
//     }, {})
//     this.setState({userInputs: map})
//   }

//   componentDidUpdate() {
//     if()
//   }

//   render() {
//     return(
//       <div className="mad-lib-entry">
//         <div className="inputs">
//           {this.state.inputs}
//         </div>
//         <button className="submit" 
//         onClick={(event) => this.submitWords(event)}
//         >Create your Mad Lib</button>
//       </div>
//   )}
// }