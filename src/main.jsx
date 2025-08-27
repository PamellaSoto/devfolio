import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './i18n.js'

import LandingPage from './LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage/>
  </StrictMode>
)
