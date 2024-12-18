//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'


import{createBrowserRouter,RouterProvider} from "react-router-dom"
import Resume from './pages/Resume/Resume.jsx'
import About from './pages/About/About.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Blogs from './pages/Blogs/Blogs.jsx'
import Contact from './pages/Contact/Contact.jsx'
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
      },
      {
        path : "/blogs",
        element :<Blogs/>
      },
      {
        path : "/contact",
        element :<Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>, 
)
