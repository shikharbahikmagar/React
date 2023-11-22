import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, SetCounter] = useState(0);

  const IncCounter = () =>
  {
      
      if(counter<20)
      {
        counter = counter + 1;
        SetCounter(counter)
      }else
      {
        alert("Counter Limit exceed")
      }
  }

  const DscCounter = () =>
  {
    
    if(counter>0)
      {
      counter = counter - 1
      SetCounter(counter)
      
      }else
      {
      alert("counter Limit exceed")
      }
  }

  return (
    <>
      <h1>Counter</h1>
      <br />
      <h3>Counter Value: {counter}</h3>
      <br />
      <button onClick={IncCounter}>Increase Value</button>
      <br />
      <h2>Counter Value: {counter}</h2>
      <br />
      <button onClick={DscCounter}>Decrease Value</button>
      <br />
      <h2>Counter Value: {counter}</h2>
    </>
  )
}

export default App
