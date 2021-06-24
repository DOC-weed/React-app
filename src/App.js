import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import {BrowserRouter as Router, Redirect,Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home">
         <Home/> 
       </Route>
       <Route path="/">
         <Login/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
