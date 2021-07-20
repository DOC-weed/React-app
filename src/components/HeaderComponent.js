import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo.png'
import '../assets/css/HeaderComponent.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { GrCart } from 'react-icons/gr';
import { GrLogout } from 'react-icons/gr';
import { GrFormSearch } from 'react-icons/gr';





export default function Header() {

    const [checkCustomer, setcheck] = React.useState(false);
    const [customer, setCustomer] = React.useState({});

    const url = 'http://localhost:4000';
    const urlsite = window.location.href;
    const accesToken = localStorage.getItem('token')
    const id = localStorage.getItem('_id')
    let history = useHistory();

    useEffect(() => {
        if (accesToken == '' || accesToken == null) {
            console.log('no hay token');
        } else {

            axios.get(url + '/customer/' + id).then((res) => {
                setCustomer(res.data)
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

    }, [])
    function logOut(){
        localStorage.clear();
        history.push('/login');

    }
    console.log(customer)




    return (
        <div className="" >
            <Navbar className="fondo" scrolling dark expand="lg" >

                <Navbar.Brand href="/home">
                    <img className="pagina" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end primary-navbar">
                    <Form inline className="" >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
                        <Button className="" variant="secondary"><span className=""><GrFormSearch/></span></Button>
                    </Form>
                    <Nav className="justify-content-end nav_bar" > 
                        {(!checkCustomer)?<Nav.Link href="/register" className="navegacion" ><span className="badge bg-custom-1 span">Sign up</span></Nav.Link>:""}
                        {(!checkCustomer)?<Nav.Link href="/login" className="navegacion" ><span className="badge bg-custom-2 span">Sign in</span></Nav.Link>:""}
                        <Nav.Link style={{ color: 'white' }} className="navegacion"><span className="badge bg-custom-1 span "><GrCart/> <span class="badge bg-secondary">0</span></span></Nav.Link>
                        {(customer.customer_type === 'seller') ?
                            <Nav.Link style={{ color: 'white' }} className=" navegacion"><span className="badge bg-custom-2 span">Wallet <span class="badge bg-secondary">$42</span></span></Nav.Link> : ""}
                         {(customer.customer_type ==='seller')?<Nav.Link href="seller/profile" style={{ color: 'white' }} className="navegacion"><span className="badge bg-warning span" >Dashboard</span></Nav.Link> : ""}   
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

