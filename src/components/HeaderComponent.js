import React, {useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo.png'
import '../assets/css/HeaderComponent.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Header()  {

    const [check, setcheck]= React.useState(false);



    
    useEffect(()=>{
        const url = window.location.href;
        if(url !== 'http://localhost:3000/login'){
            setcheck(true);
        }
    },[])
    

    let accesToken = localStorage.getItem('token')
    

    return ( 
        <div className={(check)?"show":"hide"}  >
        <Navbar className="fondo" scrolling dark expand="md" >
            <Navbar.Brand href="#home">
                <img className="pagina" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Form inline className="searchBar" >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-end" >
                <Nav.Link  className="navegacion" style={{color: 'white'}}>Sign up</Nav.Link>
                <Nav.Link className="navegacion" style={{color: 'white'}}>Sign in</Nav.Link>
                <Nav.Link  style={{color: 'white'}}className="LoginButton navegacion">Cart</Nav.Link>
                <Nav.Link  style={{color: 'white'}}className="LoginButton navegacion">Wallet</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Navbar>
            <Nav className="justify-content-end" >
                <Nav.Link  className="navegacion" style={{color: 'white'}}>Sign up</Nav.Link>
                <Nav.Link className="navegacion" style={{color: 'white'}}>Sign in</Nav.Link>
                <Nav.Link  style={{color: 'white'}}className="LoginButton navegacion">Cart</Nav.Link>
                <Nav.Link  style={{color: 'white'}}className="LoginButton navegacion">Wallet</Nav.Link>
                </Nav>

            </Navbar>
        </div>

    );
    
}

