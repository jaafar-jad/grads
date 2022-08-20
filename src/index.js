import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import './index.css';
import Card from './cads/Cards'
import reportWebVitals from './reportWebVitals';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout/Layout";
import Slideshow from './Slideshow/Slideshow';
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
