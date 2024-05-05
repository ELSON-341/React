import { useState } from 'react'
import FirstComponets from './components/FirstComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Fundamentos do react</h1>
     <FirstComponets></FirstComponets>
    </>
  )
}

export default App
