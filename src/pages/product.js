import React, {useEffect}  from 'react';
import Head from '../components/HeaderComponent';
import logo from '../assets/images/placeholder.png';
import '../assets/css/product.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';



export default function Product(props){
    const [dataProduct, setdataprodcut] =React.useState({});
    const [quantity, setquantity] = React.useState(1);
    const url ='https://dwi-back-end.herokuapp.com/';

    let _id = props.match.params.id;
    let accesToken = localStorage.getItem('token');
    let history = useHistory();
    useEffect(async () => {
        await axios.get(url+'product/'+_id).then(res=>{
            console.log(res);
            setdataprodcut(res.data.productDB);
  
        }).catch(err=>{
  
        });
  
      },[]);
      function goToCart(){
        if(accesToken === '' || accesToken === null){
            swal({
                title: "I don't know",
                text: "You must log in to see your cart",
                icon: "info"

            });
        }else{
            history.push('/cart');
            
        }
    }
      function addToCart(){
          
            swal({
                title: "One less thing to do",
                text: "added product",
                icon: "success"
              });
              setquantity(1);

          
      }
    
    return(
        <>
            <Head/>
            <div className="product_father p-2 my-5">
                <div className="container_head">
                   <Link to="/home"> <button className="btn btn-primary">Back to store</button></Link>
                   <button className="btn bg-cust" onClick={goToCart}>View cart</button>
                </div> 
            <div className="product_container ">
                <div className="col_1 p-1">
                    <img src={logo}/>
                </div>
                <div className="col_2">
                
                    <h1>{dataProduct.name}</h1>
                    <h3>{dataProduct.description}</h3>
                    <p>SKU:{dataProduct.sku}</p>
                    <h3>${dataProduct.price}</h3>
                    <div>
                        <input type="number" className="form-control mb-1" min="1" max={dataProduct.stock} value={quantity} onChange={e => setquantity(e.target.vale)} />
                        <button className="btn btn-warning mr-2" onClick={addToCart}>Add to cart</button>
                    </div>

                    
                

                </div>
            </div>

            </div>
            
        </>
    );

}