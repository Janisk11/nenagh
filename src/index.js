import React from 'react'
import { BrowserRouter } from 'react-router-dom' 
import ReactDOM from 'react-dom/client' // Correct import for React 18
// import './index.css';
import App from './App'
// import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// serviceWorker.unregister();
