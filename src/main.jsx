import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './home'
import { GlobalStyles } from './GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
