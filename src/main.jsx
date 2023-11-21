import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from "./routes/Home"
import Cursos from './routes/Cursos/index.jsx'
import DetalharCurso from './routes/DetalharCurso/index.jsx'
import Faculdades from './routes/Faculdades/index.jsx'
import DetalharFaculdade from './routes/DetalharFaculdade/index.jsx'

const router = createBrowserRouter ([
  {
    element: <App/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/faculdades",
        element: <Faculdades />
      },      
      {
        path:"/faculdade/:id",
        element: <DetalharFaculdade />
      },
      
      {
        path:"/cursos",
        element: <Cursos/>
      },
      {
        path:"/cursos/:id",
        element: <DetalharCurso/>
      }
    ]
  }
])







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
