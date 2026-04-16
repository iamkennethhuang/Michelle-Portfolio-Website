import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LaKolePage from './pages/LaKolePage.jsx'
import HanabusaSoySaucePage from './pages/HanabusaSoySaucePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/la-kole" element={<LaKolePage />} />
        <Route path="/project/hanabusa-soy-sauce" element={<HanabusaSoySaucePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
