import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Contact from "./routes/Contanct.jsx"

// 2 - página da erro
import ErrorPage from './routes/ErrorPage.jsx'

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

// 3  - componente base
import Home from './routes/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element : <App/>,
    errorElement: <ErrorPage/>,
    // 3  - componente base
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      }
    ]
  },
//   {
//     path:'contact',
//     element : <Contact/>
//   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,

)
