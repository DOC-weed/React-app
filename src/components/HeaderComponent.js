import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
class HeaderComponent extends React.Component {
    
    render() {
        let accesToken = localStorage.getItem('token')
        
        return ( 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" >
                    <Nav.Link>About us</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link className="LoginButton" >Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

        );
    }
}

export default HeaderComponent;