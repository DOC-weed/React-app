import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo.png'
import '../assets/css/HeaderComponent.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import { GrCart } from 'react-icons/gr';
import { GrLogout } from 'react-icons/gr';
import { GrFormSearch } from 'react-icons/gr';





export default function Header() {

    const [checkCustomer, setcheck] = React.useState(false);
    const [customer, setCustomer] = React.useState({});
  

    const url ='https://dwi-back-end.herokuapp.com/';
    const history = useHistory();
    let accesToken = localStorage.getItem('token');
    let id = localStorage.getItem('_id');
    let wallet = localStorage.getItem('wallet');


    useEffect(async () => {
        if (accesToken === '' || accesToken === null) {
            console.log('no hay token');
        } else {

            await axios.get(url + 'customer/' + id).then((res) => {
                setCustomer(res.data.customerDB);
                console.log(res.data.customerDB);
                localStorage.setItem('customer_id',res.data.customerDB.customer_seller);
                setcheck(true);
                
            }).catch(err => {
                console.log(err);
                swal({
                    title: "Ouups!",
                    text: "There was a problem with your session, please log out and log in again",
                    icon: "info"
                });
            });
            
            
        }

    }, []);
    function logOut(){
        localStorage.clear();
        history.push('/login');
    }
    
    function goToCart(){
        if(accesToken === '' || accesToken === null){
            swal({
                title: "I don't know",
                text: "You must log in to see your cart",
                icon: "info"

            });
        }else{
            history.push('/cart');
            
        }
    }
    async function getwallet(){
        let id = localStorage.getItem('customer_id');
        await axios.get(url +'customer-seller/'+id).then(res => {
            localStorage.setItem('wallet',res.data.customerSellerDB.wallet);
        }).catch(err => {
            console.log(err);
        })   
        
    }
   getwallet();
    
    
    
    




    return (
         <div className="" >
             <Navbar className="fondo" scrolling dark expand="lg" >

            <Navbar.Brand href="/home">
                <img className="pagina" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end primary-navbar">
                
                <Nav className="justify-content-end nav_bar" > 
                    {(!checkCustomer)?<Nav.Link href="/register" className="navegacion" ><span className="badge bg-custom-1 span">Sign up</span></Nav.Link>:""}
                    {(!checkCustomer)?<Nav.Link href="/login" className="navegacion" ><span className="badge bg-custom-2 span">Sign in</span></Nav.Link>:""}
                    <Nav.Link style={{ color: 'white' }} onClick={goToCart} className="navegacion"><span className="badge bg-custom-1 span "><GrCart/> <span class="badge bg-secondary"></span></span></Nav.Link>
                    {(customer.customer_type === 'seller') ?
                        <Nav.Link style={{ color: 'white' }} className=" navegacion"><span className="badge bg-custom-2 span">Wallet <span class="badge bg-secondary">${wallet}</span></span></Nav.Link> : ""}
                    {(customer.customer_type ==='seller')?<Nav.Link href="/seller/profile" style={{ color: 'white' }} className="navegacion"><span className="badge bg-warning span" >Dashboard</span></Nav.Link> : ""}   
                    {(checkCustomer) ? <Nav.Link onClick={logOut} className="navegacion" ><span className="badge bg-danger span"><GrLogout/></span></Nav.Link> : ""}
                </Nav>

            </Navbar.Collapse>
            </Navbar>

            <Nav className="navbar justify-content-center bg-custom-3" >
                <Nav.Link className="" href="/us" >About us</Nav.Link>
                <Nav.Link className="" href="/contactus" >Contact us</Nav.Link>
                <Nav.Link className="" href="/vision">Vision</Nav.Link>
                <Nav.Link className="" href="/mision">Mision </Nav.Link>
            </Nav>
            
            

            
        </div>

    );

}

