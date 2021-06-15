import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/login.css';
import Home from '../components/Home';

class Login extends React.Component{

    constructor (props){
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
    }

    state = {email: '', pass:''};
    loggedIn = false;
  
      submitform=()=> {
          let bool;
          
          if(this.state.email === 'andres@ceos.com'&& this.state.pass==="Andres123$"){
              this.loggedIn = true;

              
          }
          bool = this.loggedIn;
        console.log('Email: ' + this.state.email+' pass:'+this.state.pass);
        console.log(this.loggedIn);
        return bool;
      }
    render(){
        return(
            <div className="my-5 py-5">
            <div className="container_login">
                <h2 className="my-2 color-primary">LOGIN</h2>
            <Form>
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


            </div>
        )

    }


}

export default Login;   