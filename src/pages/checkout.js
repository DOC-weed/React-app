import React, {useEffect,Component} from 'react'
import ReactDOM from "react-dom";
import Head from '../components/HeaderComponent'
import '../assets/css/checkout.css';
import logo from '../assets/images/placeholder.png';
//import PayPalBtn from '../components/PayPaylBtn';
import { PayPalButton } from "react-paypal-button-v2";
import swal from 'sweetalert';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export default function Checkout(){
    
    
    const cart = JSON.parse(localStorage.getItem('cart'));
    const [subtotal,setsubtotal]= React.useState(null);
    const[total,settotal]= React.useState(null);
    const [user, setuser]= React.useState({});
    const url ='https://dwi-back-end.herokuapp.com/';
    let id = localStorage.getItem('_id');
    let history = useHistory();
      useEffect(async ()=>{
        console.log(cart);
        let suma = 0;
        cart.map((numero) =>{
        suma += numero.price;
        });
        let tot = (0.16 * suma) + suma;
        setsubtotal(suma);
        settotal(tot);

        await axios.get(url+'customer/'+id).then(res=>{
            setuser(res.data.customerDB);
        }).catch(err=>{
            console.log(err);
        });
        
        console.log('subtotal:$' + suma);
        console.log('total:$' + tot);
        
        
    },[])
        
        function NumberList(props) {
            const numbers = props.numbers;
            const listItems = numbers.map((number) =>
            <div className="card_custom">
              <img src={number.image} className="card-img-top" alt="..."/>
              <div className="card-body_custom">
                <p ><b>{number.name}</b></p>
                <p >{number.description}</p>
                <p >${number.price}</p>
              </div>
              <div>
                  <p>X {number.quantity}</p>
              </div>
            </div>
            );
            return (
              <div className="conttt-2">{listItems}</div>
            );
          }
    return(
        <>
        <Head/>
        <div className="container_check">
            <div className="container_form">
                <h2>Billing details</h2>
                <form action="" className="form_ py-5">
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" value={user.full_name} className="form-control" disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Country</label>
                        <input type="text" value={user.country} className="form-control" disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Shipping Address</label>
                        <input type="text" value={user.shipping_address}  className="form-control" disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Billing Address</label>
                        <input type="text" value={user.billing_address}  className="form-control"disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" value={user.email}  className="form-control" disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone</label>
                        <input type="tel" value={user.phone}  className="form-control" disabled />
                    </div>
                    

                </form>
            </div>
            <div className="container_details">
            <h2>Your Order</h2>
                <div className="container_cart_total">
                    <div className="container-scroll">
                        <NumberList numbers={cart}/>
                    </div>
                    <div className="total">
                        <p className=""><b>Sub-total: </b>${subtotal}</p>
                        <p><b>IVA:</b>16%</p>
                        <p className="" ><b>Total:</b>${total}</p>
                    </div>
                    <div>
                    <PayPalButton
        amount={total}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
            swal({
                title: "Cool!",
                text: "Paypal transaction complete",
                icon: "success"
              });
              let date2 = new Date(details.create_time);
              let dateFormat = date2.toLocaleString()
              console.log(dateFormat);
              let obj={
                customer_id:id,
                amount:total,
                shipping_address:user.shipping_address,
                order_address:user.billing_address,
                order_email:"joulura16@gmail.com",
                order_status:details.status,
                order_date:dateFormat,
                order_details: []
              }
              
              axios.post(url+'orders',obj).then(res=>{
                console.log(res);
                localStorage.removeItem('cart')
                history.push('/orders');

              }).catch(err=>{
                console.log(err);
              });
          console.log(data);
          console.log(details);
        }}
      />                   
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}
