import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='https://gab77719.github.io/arqtech-projetointegrador/'>
      <App />
    </BrowserRouter>
    <BrowserRouter/>
  </StrictMode>
)
