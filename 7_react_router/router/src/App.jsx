import './App.css'

// 3  - componente base
import { Outlet } from 'react-router-dom'

// 5 - link entre páginas
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
