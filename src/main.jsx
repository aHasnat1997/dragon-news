import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routeres/Router'
import NewsData from './context/NewsData'
import AuthProvider from './providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <NewsData>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </NewsData>
  // </React.StrictMode>,
)
