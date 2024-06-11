import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Contact from "./routes/Contanct.jsx"

// 2 - página da erro
import ErrorPage from './routes/ErrorPage.jsx'

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"

// 3  - componente base
import Home from './routes/Home.jsx'

// 7 - rotas dinâmica
import Product from './routes/product.jsx'

// 8 - nested routes
import Info from './routes/Info.jsx'

// 10 - search
import Search from './routes/search.jsx'

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
      },
      // 7 - rotas dinâmica
      {
        path: "products/:id",
        element: <Product/>
      },
      // 8 - nested routes
      {
        path: "products/:id/info",
        element: <Info/>
      },
      // 10 - search
      {
        path: "search",
        element: <Search/>,
      },
      // 11 - redirect
      {
        path: 'test',
        element: <Navigate to="/"/>
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
