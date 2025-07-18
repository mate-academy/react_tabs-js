import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss'; // Importa o CSS/SCSS global aqui

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
