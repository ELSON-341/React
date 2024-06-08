import './App.css'

// 3  - componente base
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <p>Navbar</p>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
