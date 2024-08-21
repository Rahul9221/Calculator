import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Calc from './Calc/Calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calc />
  </StrictMode>,
)
