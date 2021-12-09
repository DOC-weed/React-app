import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import FooterComponent from './components/FooterComponent';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

  <React.StrictMode>
    <App/>
    <FooterComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
//
/*
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('./serviceWorker.js',{
    scope: '/src/'}).then((registration) =>{
    console.log('CLIENT: service worker registration complete. the scope is ', registration.scope);
  }).catch(err=>{
    console.log('CLIENT: service worker registration failure.');
    console.log(err);
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}*/
