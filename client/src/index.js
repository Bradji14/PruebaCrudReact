import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginUser from './login';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const [asd,asdp]=useState;
root.render(
  <React.StrictMode>
    {/* <LoginUser/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
