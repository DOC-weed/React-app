import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/login.css';
import Home2 from './Home2';
import logo from '../assets/images/logo.png';
import axios from 'axios'
import swal from 'sweetalert';
import HeaderComponent from '../components/HeaderComponent';
import { useHistory } from 'react-router';




export default function Login() {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [show, setShow]=React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const url ='https://dwi-back-end.herokuapp.com/';
   
    

    let history = useHistory();
    
    async function submitformBuyer() {

        if((email === '' && pass ==='')||(email ===''||pass==='')){
        swal({
            title: "Are you kidding?",
            text: "Email or password empty, please enter your credentials.",
            icon: "error"
          });
        }else{
        const obj ={
            email:email,
            password:pass
        }
        await axios.post(url+'login',obj).then((r => {
            localStorage.setItem('token', r.data.token);
            localStorage.setItem('_id',r.data.usuario._id);
            console.log(r);
            history.push("/home");
            
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
            await axios.post(url+'login/',obj).then((res => {
                console.log(res);
                if(res.data.usuario.customer_type !== "seller"){
                    swal({
                        title: "Ouups!",
                        text: "Your account is not a seller's account, please log in as a buyer or update your account here",
                        icon: "info"
                    });
                }else{
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('_id',res.data.usuario._id); 
                    console.log(res);
                    history.push("/seller/profile");
                }
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
                        <button className={(show)?"btn_1 active":"btn_1"} name="Seller" onClick={e =>setShow(true)}>Seller</button>
                        <button className={(!show)?"btn_2 active":"btn_2"} name="Buyer" onClick={e => setShow(false)}>Buyer</button>
                    </div>
                </div>
                {(!show)?<div className="form">
                    <h2>Buyer</h2>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="emailBuyer" placeholder="Example@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="passBuyer" placeholder="Password"
                            value={pass}
                            onChange={e => setPass(e.target.value)} />
                    </Form.Group>

                    <Button variant="buyer" name="buttonBuyer" type="button"
                    onClick={submitformBuyer}>
                        Sign in
                    </Button>

                </Form>

                </div>:<div className="form">
                    <h2>Seller</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' name="emailSeller" placeholder='Example@email.com' value={email} onChange={e => setEmail(e.target.value)} /> 
                            
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="passSeller" placeholder="Password"
                            value={pass}
                            onChange={e => setPass(e.target.value)} />
                    </Form.Group>

                    <Button variant="seller" name="buttonSeller" type="button"
                        onClick={submitformSeller}>
                        Sign in
                    </Button>

                </Form>
                
                </div>}  
                <div className="form">
                    <p>Don't you have an account yet? Create an account as a seller or buyer <Link to="/register"><a href="#">here</a></Link>.</p>
                </div>
            </div>
            </div>

        </div>
        
        </>
    )

}