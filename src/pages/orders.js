import axios from 'axios';
import React,{useEffect}  from 'react';
import Head from '../components/HeaderComponent';
import '../assets/css/orders.css';

export default function Order(){
    const [orders, setorders]=React.useState([]);
    const url ='https://dwi-back-end.herokuapp.com/';
    let id = localStorage.getItem('_id');
    
    useEffect(async () => {
        await axios.get(url+'ordersCustomer/'+id).then(res=>{
            console.log(res.data.orderDB);
            setorders(res.data.orderDB);
        }).catch(err=>{

        });
    }, [])
    console.log(orders);
   

    return(
        <>
        <Head/>
        <div className="my-5 py-5 mx-4 m">
            <h2>Your orders</h2>
            <div className="table_custom">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Status</th>
                    </tr>

                </thead>
                <tbody>

                </tbody>
                {
                    
                    orders.map((p, index)=>(
                        
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{p._id}</td>
                            <td> ${p.amount}</td>
                            <td>{new Date(p.order_date).toLocaleString()}</td>
                            <td>{p.order_status}</td>
                        </tr>
                    ))
                }
               

            </table>
            </div>
        </div>

        
        
        </>
    )
}