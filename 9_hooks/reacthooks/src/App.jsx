import {Outlet} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="app">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/contact'>Contato</NavLink>
      <Outlet/>
    </div>
  )
}

export default App
