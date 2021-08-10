import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import AddProduct from './pages/addProduct';
import HeaderComponent from './components/HeaderComponent';
import ContactUs from './pages/contactUs';
import Us from './pages/us';
import Mision from './pages/mision';
import Vision from './pages/vision';
import Register from './pages/registerUser';
import Checkout from './pages/checkout';
import Cart from './pages/cart';
import Product from './pages/product';
import Order from './pages/orders';


import {BrowserRouter as Router, Redirect,Route, Switch } from 'react-router-dom';

function App() {
  
  return (
   <Router>
     <Switch>
       <Route path="/login" exact={true} >
         <Login/> 
       </Route>
       <Route path="/register" exact={true} >
         <Register/> 
       </Route>
       <Route path="/contactus" exact={true} >
         <ContactUs/> 
       </Route>
       <Route path="/us" exact={true} >
         <Us/> 
       </Route>
       <Route path="/mision" exact={true} >
         <Mision/> 
       </Route>
       <Route path="/vision" exact={true} >
         <Vision/> 
       </Route>
       <Route path="/home" exact={true} >
         <Home/>
       </Route>
       <Route path="/product/:id" component={Product} exact={true} />
       <Route path="/checkout"component={Checkout} exact={true}/> 
       <Route path="/orders" component={Order} exact={true}/>
       
       <Route path="/cart" exact={true} >
       <Cart/> 
       </Route>
       <Route path="/" exact={true} >
       <Home/> 
       </Route>
       <Route path="/seller/profile" component={Home2} exact={true}/>
       <Route path="/products/:proveedor/:action" component={AddProduct} exact={true}/>
     </Switch>
   </Router>
   
  );
}

export default App;
