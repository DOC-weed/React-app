import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import HeaderComponent from './components/HeaderComponent';

import {BrowserRouter as Router, Redirect,Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <>
    <HeaderComponent />
    <Login></Login>
    </>
  );
}

export default App;
