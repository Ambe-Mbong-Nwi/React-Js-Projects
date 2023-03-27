import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



//first line says: render our App html element defined in the App.js file into the place with elemnt thar has the root ID ie in the index file in the public folder
//Src: 99% of code written stays here. App.js is the default created component, css, index.js(file that kickstsarts app. Ie it takes app component and mounts to DOM) 
//React.StrictMode meaning react does extra checks and gives us warning if any.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
