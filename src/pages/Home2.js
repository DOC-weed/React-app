import React, { useEffect, useState } from 'react';
import '../assets/css/Home2.css';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import profile from '../assets/images/profile.png'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom';


import NumberFormat from 'react-number-format';

export default function Home2() {
    const [sellerData, setSellerData] = React.useState([{
        id: 1,
        full_name: "Erik Daniel Mendoza Olivares",
        email: "erikmendozaolivares@gmail.com",
        password: "edmo12345",
        billing_address: "",
        shipping_address: "",
        country: "",
        phone: "4491114685",
        customer_type: "seller",
        customer_seller: {
            customer_id: "1",
            wallet: 0,
            products_id: [1, 2]
        }
    }]);
    const [products, setProducts] = React.useState([
        { id: 1, customer_id: 1, sku: null, name: 'Product1', price: 300, description: "", thumbnail: "", image: "", create_date: "", stock: 12, category: { id: 1, name: 'Phone accessories', description: "" } },
        { id: 2, customer_id: 1, sku: null, name: 'Product2', price: 10000, description: "", thumbnail: "", image: "", create_date: "", stock: 120, category: { id: 2, name: 'Electronics', description: "" } }
    ]);

    const [name, setName] = React.useState('Erik Daniel Mendoza Olivares')
    const [phone, setPhone] = React.useState(4491114685)

    const [editSeller, setEditSeller] = React.useState(false);

    function myFunction(e) {
        const { value } = e.target;

        var filter, table, tr, name, i, txtValue;

        filter = value.toUpperCase();

        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            name = tr[i].getElementsByTagName("td")[0];
            if (name) {
                txtValue = name.textContent || name.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function Guardar() {
        setEditSeller(false);
        setSellerData([{
            id: 1,
            full_name: name,
            email: "erikmendozaolivares@gmail.com",
            password: "edmo12345",
            billing_address: "",
            shipping_address: "",
            country: "",
            phone: phone,
            customer_type: "seller",
            customer_seller: {
                customer_id: "1",
                wallet: 0,
                products_id: [1, 2]
            }
        }]);
    }

    function Cancelar() {
        setEditSeller(false);
        setName(sellerData[0].full_name);
        setPhone(sellerData[0].phone);
    }

    return (
        <div id="pricipal" style={{ width: '100%' }}>
            <Header />
            <div>
                <div className="containerAdd">
                    <input type="checkbox" id="btn-mas" />
                    <div className="btn-mas">
                        <Link to={`/products/${sellerData[0].id}/add`}> <label className="icon-mas2"><GrAdd style={{ width: '100%' }} /></label></Link>
                    </div>
                </div>
                <div className="row" style={{ width: "100%", margin: '0', padding: '0' }}>
                    <div id="menuProveedor" className="col-sm-12 col-md-4 col-lg-3">
                        {(!editSeller) ?
                            <a onClick={() => setEditSeller(true)} id={editSeller}>
                                <BiEdit style={{ display: 'flex', width: '40px', height: '40px', cursor: 'pointer' }} />
                            </a>
                            :
                            ''
                        }
                        {
                            sellerData.map((s, index) => (
                                <div key={index}>
                                    <img id="imgProfile" src={profile} alt="profileImg" />
                                    {(editSeller) ?
                                        <>
                                            <input type="file" />
                                            <form style={{ textAlign: 'left', margin: '20px', }}>
                                                <div class="form-group">
                                                    <label for="name">Name</label>
                                                    <input type="text" class="form-control" value={name} id="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="name">Phone Number</label>
                                                    <input type="number" class="form-control" value={phone} id="phone" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
                                                </div>
                                            </form>
                                        </>
                                        :
                                        <>
                                            <p>{s.full_name}</p>
                                            <p>{s.email}</p>
                                            <p>Phone: {s.phone}</p>
                                        </>
                                    }

                                </div>
                            ))
                        }
                        {(editSeller) ?
                            <div className="btn-editSeller">
                                <button className="button btn-primary" onClick={Guardar}>Guardar</button>
                                <button className="button btn-danger" onClick={Cancelar}>Cancelar</button>
                            </div>
                            :
                            ''
                        }


                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-9">
                        <>
                            <p id="products">My Products List</p>

                            {<input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for product name..." />}

                            <table id="myTable">
                                <thead className="header">
                                    <tr>
                                        <th scope="col" style={{ width: '35%' }}>Products</th>
                                        <th scope="col" style={{ width: '20%' }}>Category</th>
                                        <th scope="col" style={{ width: '15%', textAlign: 'right' }}>Stock</th>
                                        <th scope="col" style={{ width: '15%', textAlign: 'right' }}>Price</th>
                                        <th scope="col" style={{ width: '15%' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((p, index) => (
                                            <tr key={index}>
                                                <td>{p.name}</td>
                                                <td>{p.category.name}</td>
                                                <td style={{ textAlign: 'right' }}><NumberFormat value={parseFloat(p.stock).toFixed(2)} displayType={'text'} decimalScale={2} thousandSeparator={true} /></td>
                                                <td style={{ textAlign: 'right' }}><NumberFormat value={parseFloat(p.price).toFixed(2)} displayType={'text'} decimalScale={2} thousandSeparator={true} prefix={'$ '} /></td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <Link to={`/products/${sellerData[0].id}/${p.id}`} >
                                                        <BiEdit />
                                                    </Link>
                                                    <a onClick={() => console.log('eliminar' + p.id)}>
                                                        <MdDelete />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
