import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/login.css';
import Home from '../components/Home';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);

    let history = useHistory();

    function submitform() {
        let bool;

        if (email === 'andres@ceos.com' && pass === "Andres123$") {
            setLoggedIn(true);

        }
        bool = loggedIn;
        console.log('Email: ' + email + ' pass:' + pass);
        history.push("/home");
        return bool;
    }

    useEffect(()=>{
        console.log(loggedIn)
    },[loggedIn])

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