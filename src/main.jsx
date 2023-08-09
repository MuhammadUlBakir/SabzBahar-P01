import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from './UserAuthentiaction/Signin.jsx'
import "../src/index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Signup/>
  </React.StrictMode>,
)
