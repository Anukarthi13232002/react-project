import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  // React.createElement('div',{'id':'h'},'......hii')
  // <div>
  //   <h1>Hello</h1>
  //   <p>Welcome To All</p>
  //   <li>Apple</li>
  //   <li>Orange</li>
  //   <li>Banana</li>
  // </div>
  // <img src="ice.jpg" alt="" />
  <StrictMode>
    <App />
  </StrictMode>
)
