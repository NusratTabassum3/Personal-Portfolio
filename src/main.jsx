//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import Resume from './pages/Resume/Resume.jsx'

import{createBrowserRouter,RouterProvider} from "react-router-dom"
import About from './pages/About/About.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
//npm i react-router-dom localforage match-sorter sort-by

const router= createBrowserRouter([
  {
    path:"/",
    element : <App></App>,

    children : [
      {
        path : "/",
        element : <About/>
      },
      {
        path : "/resume",
        element : <Resume/>
      },
      {
        path : "/portfolio",
        element : <Portfolio/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>, 
)
