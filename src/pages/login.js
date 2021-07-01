import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/login.css';
import Home from './Home';
import logo from '../assets/images/logo.png';
import axios from 'axios'
import swal from 'sweetalert';
import HeaderComponent from '../components/HeaderComponent';



export default function Login() {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [show, setShow]=React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);

    let history = useHistory();
    let url = 'http://localhost:4000';

    async function submitformBuyer() {

        if((email == '' && pass =='')||(email ==''||pass=='')){
        swal({
            title: "Ouups!",
            text: "Email or password empty, please enter your credentials.",
            icon: "error"
          });
        }else{
        const obj ={
            email:email,
            password:pass
        }
        await axios.post(url+'/auth/singin',obj).then((r => {
            localStorage.setItem('token', r.data.token);
            localStorage.setItem('_id',r.data.id);
            console.log(r);
            history.push("/home1");
            
        })).catch((err =>{
            console.log(err);
            swal({
                title: "Ouups!",
                text: "Wrong email or password",
                icon: "error"
            });
        }))


       }
    
        
    }
    async function submitformSeller() {
        if((email == '' && pass =='')||(email ==''||pass=='')){
            swal({
                title: "Ouups!",
                text: "Email or password empty, please enter your credentials.",
                icon: "error"
              });
           }else{
            const obj ={
                email:email,
                password:pass
            }
            await axios.post(url+'/auth/singin',obj).then((res => {

                let customer_id = res.data.id;
                axios.get(url+'/customer/'+customer_id).then(res2 =>{
                    if(res.data.customer_type !== 'seller'){
                        swal({
                            title: "Ouups!",
                            text: "Your account isn't ",
                            icon: "info"
                        });
                    }
                    console.log(res2);

                }).catch(err =>{
                    console.log(err);
                });


                localStorage.setItem('token', res.data.token);
                localStorage.setItem('_id',res.data.id);
                console.log(res);
                history.push("/home1");
                
            })).catch((err =>{
                console.log(err);
                swal({
                    title: "Ouups!",
                    text: "Wrong email or password",
                    icon: "error"
                });
            }))

           }
        
      
    }

    return (
        <>
        
        <div className="background_container">
             
            <div className="backgroun_login">
            <div className="container_login_1">
                <div className="form-2 ">
                    <img src={logo} alt="" className="img_login_1" />
                    <h3>This is an e-commerce developed by students of the Universidad Tecnologica de Aguascalientes</h3>
                </div>
            </div>
            <div className="container_login_2">
                <div className="login_1_header">
                    <div className="login_group_buttons">
                        <button className={(show)?"btn_1 active":"btn_1"} onClick={e =>setShow(true)}>Seller</button>
                        <button className={(!show)?"btn_2 active":"btn_2"} onClick={e => setShow(false)}>Buyer</button>
                    </div>
                </div>
                {(!show)?<div className="form">
                    <h2>Buyer</h2>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Example@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            value={pass}
                            onChange={e => setPass(e.target.value)} />
                    </Form.Group>

                    <Button variant="buyer" type="button"
                    onClick={submitformBuyer}>
                        Sign in
                    </Button>

                </Form>

                </div>:<div className="form">
                    <h2>Seller</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Example@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                            
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            value={pass}
                            onChange={e => setPass(e.target.value)} />
                    </Form.Group>

                    <Button variant="seller" type="button"
                        onClick={submitformSeller}>
                        Sign in
                    </Button>

                </Form>
                
                </div>}  
                <div className="form">
                    <p>Don't you have an account yet? Create an account as a seller or buyer <a href="#">here</a>.</p>
                </div>
            </div>
            </div>

        </div>
        </>
    )

}