import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let Obj = {
    name: "shri",
    age: 23
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>
      {/* <Card username="shrijana" someObj={Obj}/> */}
      <Card username="shrijana" btnText = "click me"/>
      <Card username = "shimil"/>

        

    </>
  )
}

export default App
