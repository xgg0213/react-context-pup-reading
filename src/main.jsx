import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PupProvider } from './components/context/PupContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //     <App />
  // </React.StrictMode>

  <PupProvider>
    <App />
  </PupProvider>
);
