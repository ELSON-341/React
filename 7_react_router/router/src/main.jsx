import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

import Contanct from './routes/Contanct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "contact",
    element: <Contanct/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
