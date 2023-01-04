import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


if (!navigator.geolocation) {
  alert("Tu navegador no tiene opcion de Geolocation")
  throw new Error("Tu navegador no tiene opcion de Geolocation")
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
