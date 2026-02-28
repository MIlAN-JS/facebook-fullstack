import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import router from './app.routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './features/authentication/context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>

<RouterProvider router={router}/>


    </AuthProvider>




    

  </StrictMode>,
)
