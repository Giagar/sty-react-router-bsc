import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootPage from './routes/RootPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: 'Error Page',
    children: [
      {
        errorElement: 'Children Error Page',
        children: [
          {
            index: true,
            element: 'Index Page',
          },
          {
            path: 'contacts/:contactId',
            element: 'Contact Detail',
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
