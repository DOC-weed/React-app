import React, {useEffect}  from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/HeaderComponent';
import '../assets/css/cart.css';
import { MdDelete } from 'react-icons/md'
import logo from '../assets/images/placeholder.png';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

export default function Cart(){

    const [data,setdata]= React.useState([]);
    let cart =JSON.parse(localStorage.getItem('cart'));
    let history = useHistory();
    let newValue = 0;
    
    useEffect(()=>{
        
        console.log(cart);
        setdata(cart);
        
    },[]);
    
    console.log(cart);
    console.log(data);

    function deleteItem(index){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            let cart = data;
            cart.splice(index, 1);
            localStorage.setItem('cart',JSON.stringify(cart))
            setdata(cart);
            window.location.href = window.location.href;
            } else {
              
            }
          });
        
    }
    function changeValues(index, value){

    }

    function CartList(props) {
        const cart = props.carts;
        const listItems = cart.map((item, index) =>
        <div className="container_cart_list pb-2">
            <div className="cart_list_img px-3 py-3">
                <img src={logo}  alt="logo" />
            </div>
            <div className="cart_list_text">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
            <div className="cart_list_quantity">
                <p>$ {item.price}</p>
                <input type="number" value={item.quantity} onChange={()=>changeValues(index, item.quantity)} />
            </div>
            <div className="cart_list_button px-3">
                <button className="btn btn-danger" onClick={()=>deleteItem(index)}><MdDelete /></button>
            </div>
        </div>
        );
        return (
          <div className="container_cart_list_father my-5">{listItems}</div>
        );
      }
    return(
        <>  
            <Head/>
            {(cart===null)?
            <div className="container_cart mx-auto my-5 py-5">
                <h1>¡Oh no your cart is empty! Please back to store and add some products... </h1>
                <Link to="/home"><button className="btn btn-warning">Go to store</button></Link>
            </div>
            :
            <div>
            <CartList carts={data}/>
            <div className="checkout_section my-5">
                <button className="btn btn-primary mr-2" onClick={()=> history.push('/home')}>Back to store</button>
                <button className="btn btn-warning" onClick={()=> history.push('/checkout')}>Go to checkout</button>
            </div>
            </div>    
            }
            

        </>
    );
}