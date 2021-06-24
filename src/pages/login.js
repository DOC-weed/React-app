import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/login.css';
import Home from './Home';
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);

    let history = useHistory();

    async function submitform() {
        let bool = false;
        await axios.get(`https://back-end-dwi.herokuapp.com/users`).then((r => {
            for(const i of r.data){
                if(i.email == email && i.password == pass){
                 bool = true;  
                }
            }
            if(bool){
                console.log('Email: ' + email + ' pass:' + pass);
                history.push("/home");
            }else{
                alert('Email o Contraseña incorrectos')
            }
        }))
    }

    return (
        <div className="my-5 py-5">
            <div className="container_login">
                <h2 className="my-2 color-primary">LOGIN</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            value={pass}
                            onChange={e => setPass(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="button"
                        onClick={submitform}>
                        Login
                    </Button>

                </Form>


            </div>


        </div>
    )

}