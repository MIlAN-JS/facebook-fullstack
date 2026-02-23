import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import router from './app.routes.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}>

<App />

</RouterProvider>
    

  </StrictMode>,
)
