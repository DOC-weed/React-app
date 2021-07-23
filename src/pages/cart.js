import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/HeaderComponent';
import '../assets/css/cart.css';

export default function Cart(){
    return(
        <>  
            <Head/>
            <div className="container_cart mx-auto my-5 py-5">
                <h1>¡Oh no your cart is empty! Please back to store and add some products... </h1>
                <Link to="/home"><button className="btn btn-warning">Go to store</button></Link>
            </div>
        </>
    );
}