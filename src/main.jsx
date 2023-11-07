import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from "./routes/Home"
import Cursos from './routes/Cursos/index.jsx'


const router = createBrowserRouter ([
  {
    element: <App/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/cursos",
        element: <Cursos/>
      }
    ]
  }
])







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
