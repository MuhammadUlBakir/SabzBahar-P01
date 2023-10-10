import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from "../src/App.jsx"
import ThemeProvider from './Mainpage_Routes/Test/Testpage.jsx'
import { RentCartProvider } from './ContextApi/RentCart.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
    <ThemeProvider>
      <RentCartProvider>
      <App/>
    </RentCartProvider>
    </ThemeProvider>
    <ToastContainer autoClose = {3000} />

  </>
)
