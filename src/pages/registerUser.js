import React from 'react';
import '../assets/css/registerUser.css';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import {validPassword } from '../assets/js/regex.js';
import axios from 'axios';
import Header from '../components/HeaderComponent';



export default function RegisterUSer() {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [pass2, setPass2] = React.useState('');
    const [fullname, setFullname] = React.useState('');
    const [b_address, setBaddress] = React.useState('');
    const [s_address, setSaddress] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [type, setType] = React.useState('');
    const url ='https://dwi-back-end.herokuapp.com/';

    const [cargando, setCargando] = React.useState(false)
 
    let history = useHistory();
    

    function back(){
      history.push('/login');
    }

    function validatepass1(){
      if(pass !== pass2 ){
        swal({
          title: "Ouups!",
          text: "Passwords don't match.",
          icon: "error"
        });
        return false;
      }else{
        return true;
      }

    }
    function validatepass2(){
      if(!validPassword.test(pass)){
        swal({
          title: "Ouups!",
          text: "The password must contain at least one numeric digit, one uppercase letter, one lowercase letter, one special character and between 6 to 20 characters.",
          icon: "error"
        });
        return false;
      }else{
        return true;
      }
      
      
    }
    
    async function registerUser(event){
      event.preventDefault();

      setCargando(true)

      let val1 = validatepass2();
      let val2 = validatepass1();
      if(val1 === true && val2 === true){
      let seller;
        if(type === 'seller'){
          seller ={
            wallet:0,
            products:[]
          }
        }else{
          seller = null;
        }
        let obj = {
          full_name:fullname,
          email: email,
          password: pass,
          billing_address: b_address,
          shipping_address: s_address,
          country: country,
          phone: phone,
          customer_type: type,
          customer_seller: seller
        }
        await axios.post(url+'customer',obj).then(res =>{
          console.log(res.data)
          swal({
            title: "Let's rock!",
            text: "User created successfully.",
            icon: "success"
          });
          history.push('/login');
          
          
        }).catch(err =>{
          setCargando(false)
          swal({
            title: "D**m!",
            text: "There was a problem creating the user.",
            icon: "error"
          });
        });

        
        
      }
      
    }
    return(
        
      <>
      <Header/>
        <div className="register_container">
          <div className="form_container">
          <form onSubmit={registerUser}>
            <div className="row">
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Full Name</label>
                <input className="form-control" type="text" 
                value={fullname}
                onChange={e => setFullname(e.target.value)} required/>
              </div>
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" placeholder="Example@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)} required/>
              </div>
            </div>
            <div className="row ">
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Billing Address</label>
                <input className="form-control" type="text"
                value={b_address}
                onChange={e => setBaddress(e.target.value)} required />
              </div>
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Shipping Address</label>
                <input className="form-control" type="text"
                value={s_address}
                onChange={e => setSaddress(e.target.value)} required />
              </div>
            </div>
            <div className="row ">
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Country</label>
                <input className="form-control" type="text"
                value={country}
                onChange={e => setCountry(e.target.value)} required/>
              </div>
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Phone</label>
                <input className="form-control" type="number"
                value={phone}
                onChange={e => setPhone(e.target.value)} required />  
              </div>
            </div>
            <div className="row ">
              <div className="form-group col-12">
                <label className="form-label">Customer Type</label>
                <select className="form-control" 
                value={type}
                onChange={e => setType(e.target.value)} required> 
                  <option value="">Select...</option>
                  <option value="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>
            </div>
            <div className="row ">
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Password</label>
                <input className="form-control" type="password"value={pass}
                onChange={e => setPass(e.target.value)} required/>
              </div>
              <div className="form-group col-md-6 col-sm-12">
                <label className="form-label">Confirm password</label>
                <input className="form-control" type="password" value={pass2}
                onChange={e => setPass2(e.target.value)} required />  
              </div>
            </div>
            <div className="form-group"> 
              <button className="btn btn-primary mx-1" disabled={cargando} type="submit">Register</button>
              <button className="btn btn-danger mx-1" type="button" onClick={back} >Cancel</button>

            </div>
            

          </form>

          </div>
          
        </div>
        
        </>

    )
}