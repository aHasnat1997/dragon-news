import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routeres/Router'
import NewsData from './context/NewsData'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <NewsData>
    <RouterProvider router={router} />
  </NewsData>
  // </React.StrictMode>,
)
