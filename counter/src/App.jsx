import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue = ()=>{
    // counter = counter+1
    if(counter < 20)
      // setCounter(counter+1) 
      // setCounter(counter+1) //interview question: increases by 1 despite multiple statement to increase the counter 
      // setCounter(counter+1) 
      // setCounter(counter+1) 
      // setCounter(counter+1) 
      setCounter(prevcounter => prevcounter+1) //if you want to increase values as given you can use this method
      setCounter(prevcounter => prevcounter+1) 

  }
  const removeValue = ()=>{
    if(counter > 0)
      setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
