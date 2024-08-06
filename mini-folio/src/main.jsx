import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Project from './routes/Project.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Skills from './routes/Skills.jsx'
import Contact from './routes/Contact.jsx'
const router = createBrowserRouter([

  {

    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/projects', element: <Project /> },
      { path: '/about', element: <About /> },
      { path: '/my-skills', element: <Skills /> },
      { path: '/contact', element: <Contact /> },
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
