import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import AddProduct from './pages/addProduct';
import {BrowserRouter as Router, Redirect,Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/home" exact={true}>
         <Home/> 
       </Route>
       <Route path="/" exact={true}>
         <Login/>
       </Route>
       <Route path="/seller/profile" component={Home2} exact={true}/>
       <Route path="/products/:proveedor/:action" component={AddProduct} exact={true}/>
     </Switch>
   </Router>
  );
}

export default App;
