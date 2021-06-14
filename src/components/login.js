import React from 'react';
import {Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/login.css';
import Home from '../components/Home';

class Login extends React.Component{
    state = {email: '', pass:''};
    
      submitform =() => {
          if(this.state.email == 'andres@ceos.com'&& this.state.pass=="Andres123$"){
            return <Redirect to='/Home'  />
          }else{

          }
        console.log('Email: ' + this.state.email+'pass:'+this.state.pass);

       
      }
    render(){
        return(
            <>
            <div className="container_login">
            <Form >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  
                    value={this.state.email} 
                    onChange={e => this.setState({email:e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={this.state.pass} 
                    onChange={e => this.setState({pass:e.target.value})}/>
                </Form.Group>
                
                <Button variant="primary" type="button"
                onClick={this.submitform}>
                    Login
                </Button>
            </Form>


            </div>


            </>
        )

    }


}

export default Login;   