import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logoPagina from '../assets/images/LogoPagina.png'
import '../assets/css/HeaderComponent.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
class HeaderComponent extends React.Component {
    
    render() {
        let accesToken = localStorage.getItem('token')
        
        return ( 
            <Navbar className="fondo" scrolling dark expand="md" >
                <Navbar.Brand href="#home"><img className="pagina" src={logoPagina} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end" >
                    <Nav.Link  className="navegacion" style={{color: 'white'}}>Us</Nav.Link>
                    <Nav.Link className="navegacion" style={{color: 'white'}}>Contact Us</Nav.Link>
                    <Nav.Link  style={{color: 'white'}}className="LoginButton navegacion" >Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

        );
    }
}

export default HeaderComponent;