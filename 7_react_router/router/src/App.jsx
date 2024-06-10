import './App.css'

// 3  - componente base
import { Outlet } from 'react-router-dom'

// 5 - link entre páginas
import NavBar from './components/NavBar'

// 10 - search params
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <NavBar/>
      <SearchForm/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
