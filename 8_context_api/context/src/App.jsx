import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1>Context API</h1>
      <Outlet/>
    </div>
  )
}

export default App
