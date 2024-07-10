import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="app">
      <Outlet/>
    </div>
  )
}

export default App