import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);