import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Greet from './components/codtwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Greet/>
         </div>
  )
}

export default App
