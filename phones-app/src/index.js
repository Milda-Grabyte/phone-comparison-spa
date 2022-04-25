import React from 'react';
import ReactDOM from 'react-dom/client';
import PhoneAppRouter from './infrastructure/router/PhoneAppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneAppRouter />
  </React.StrictMode>
);