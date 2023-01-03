import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//house context provider
import HouseContextProvider from './components/HouseContext';

// import router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </HouseContextProvider>
);
