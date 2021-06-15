import './App.css';
import Login from './components/login';
import Home from './components/Home';
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
