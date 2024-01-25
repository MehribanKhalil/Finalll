import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { WihslistProvider } from './context/WishlistContex.jsx'
import { BasketProvider } from './context/BasketContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WihslistProvider>
      <BasketProvider>
      <App />

      </BasketProvider>

    </WihslistProvider>
  </React.StrictMode>,
)
