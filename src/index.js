import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './screens/home/Home';
// import { Header } from './common/header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home />
  </React.StrictMode>
);