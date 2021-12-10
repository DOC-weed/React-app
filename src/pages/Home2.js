import React, { useEffect, useState } from 'react';
import '../assets/css/Home2.css';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import profile from '../assets/images/profile.png'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Camera from '../components/camera.js'

import NumberFormat from 'react-number-format';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

import { storage, db } from '../firebase';

export default function Home2() {
    const [customerId, setCustomerId] = React.useState(localStorage.getItem('_id'));
    const [sellerData, setSellerData] = React.useState([]);

    const [products, setProducts] = React.useState([]);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [billing_address, setBilling_Address] = React.useState('');
    const [shipping_address, setShipping_Address] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [customer_type, setCustomer_Type] = React.useState('');

    const [editSeller, setEditSeller] = React.useState(false);
    const [mode, setMode] = React.useState(false);

    const [show, setShow] = useState(false);

    const [defaultImg, setDefaultImg] = useState(profile);
    const [photo, setPhoto] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getSellerData();
        getProducts();
    }, []);

    const __savePhoto = (capture) => {
        setPhoto(capture);
        setCapturedImage(capture);
    }

    async function getSellerData() {
        await axios.get(`https://dwi-back-end.herokuapp.com/customer/${customerId}`).then(async c => {
            for (const s of [c.data.customerDB]) {
                setName(s.full_name);
                setEmail(s.email)
                setPhone(s.phone)
                setBilling_Address(s.billing_address)
                setShipping_Address(s.shipping_address)
                setCountry(s.country)
                setCustomer_Type(s.customer_type)
            }
            await storage.ref("profile/" + customerId).getDownloadURL().then(profile => {
                setPhoto(profile);
                setCapturedImage(null);
            }).catch(e => {
                setPhoto(defaultImg);
                setCapturedImage(null);
            });
            setSellerData([c.data.customerDB])
        })
    }

    async function getProducts() {
        await axios.get(`https://dwi-back-end.herokuapp.com/productbyseller/${customerId}`).then(async c => {
            await axios.get(`https://dwi-back-end.herokuapp.com/category`).then(cc => {
                let arr = [];
                for (const i of c.data.productDB) {
                    let category = {};
                    for (const j of cc.data.category) {

                        if (i.category == j._id) {
                            category = { _id: j._id, name: j.name, description: j.description }
                        }
                    }

                    const obj = { _id: i._id, customer_id: i.customer_id, sku: i.sku, name: i.name, price: i.price, stock: i.stock, category: category }

                    arr.push(obj);
                }
                setProducts(arr)

            })
        })
    }

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

    async function Save(e) {
        e.preventDefault();
        if (capturedImage != null) {
            const response = await fetch(capturedImage)
            const blob = await response.blob();
            await storage.ref("profile/" + customerId).put(blob).then(res => {
                Cancel();
            }).catch(err => {
                Cancel();
            });
        }

        const obj = {
            full_name: name,
            email: email,
            billing_address: billing_address,
            shipping_addresss: shipping_address,
            country: country,
            phone: phone,
            customer_type: customer_type
        }

        await axios.put(`https://dwi-back-end.herokuapp.com/customer/${customerId}`, obj).then(c => {
            getSellerData();
            setEditSeller(false);
            swal({
                title: "Success!",
                text: "User saved successfully",
                icon: "success"
            });
        })

    }

    function Cancel() {
        setEditSeller(false);
        setCapturedImage(null);
        getSellerData();
    }

    async function deleteProduct(id) {
        await axios.delete(`https://dwi-back-end.herokuapp.com/product/${id}`).then(c => {
            swal({
                title: "Success!",
                text: "product removed successfully",
                icon: "success"
            });
            getProducts();
        })
    }

    return (
        <div id="pricipal" className={(mode) ? "darkmode" : "normal"} style={{ width: '100%' }}>
            <Header />
            <div>
                <div className="containerAdd">
                    <input type="checkbox" id="btn-mas" />
                    <div className="btn-mas">
                        <Link to={`/products/${customerId}/add`}> <label className="icon-mas2"><GrAdd style={{ width: '100%' }} /></label></Link>
                    </div>
                </div>
                <div className="row" style={{ width: "100%", margin: '0', padding: '0' }}>
                    <div id="menuProveedor" className="col-sm-12 col-md-4 col-lg-3">
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" value={mode} onChange={(e) => setMode(e.target.checked)} id="customSwitch1" />
                            <label class="custom-control-label" for="customSwitch1">Dark Mode</label>
                        </div>
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
                                    <div id="imgProfile">
                                        <img style={{ width: '100%' }} src={photo} alt="profileImg" />
                                        {
                                            (editSeller) ?
                                                <Button onClick={handleShow} variant="secondary" style={{ position: 'absolute', width: '100%', bottom: 0, backgroundColor: 'rgb(0,0,0,0.45)' }}>Editar</Button>
                                                :
                                                ''
                                        }
                                    </div>
                                    {(editSeller) ?
                                        <>
                                            <form style={{ textAlign: 'left', margin: '20px', }} onSubmit={Save}>
                                                <div class="form-group">
                                                    <label for="name">Name</label>
                                                    <input type="text" class="form-control" value={name} id="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="name">Phone Number</label>
                                                    <input type="number" class="form-control" value={phone} id="phone" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="name">Billing Address</label>
                                                    <input type="text" value={billing_address} class="form-control" id="billing_address" placeholder="Billing Address" onChange={(e) => setBilling_Address(e.target.value)} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="shipping_address">Shipping Address</label>
                                                    <input type="text" value={shipping_address} class="form-control" id="shipping_address" placeholder="Shipping Address" onChange={(e) => setShipping_Address(e.target.value)} />
                                                </div>
                                                <div className="btn-editSeller">
                                                    <button className="btn save" type="submit" >Save</button>
                                                    <button className="btn btn-danger" onClick={Cancel}>Cancel</button>
                                                </div>
                                            </form>
                                        </>
                                        :
                                        <>
                                            <p>{s.full_name}</p>
                                            <p>{s.email}</p>
                                            <p>Phone: {s.phone}</p>
                                            <p>Billing Address: {s.billing_address}</p>
                                            <p>Shipping Address: {s.shipping_address}</p>
                                        </>
                                    }

                                </div>
                            ))
                        }
                        {(editSeller) ?
                            ''
                            :
                            ''
                        }


                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-9" style={{ width: '100%', height: '100vh' }}>
                        <>
                            <p id="products">My Products List</p>

                            {<input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for product name..." />}

                            <div style={{ overflowY: 'scroll', display: 'flex', height: '80%' }}>
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
                                                        <Link to={`/products/${customerId}/${p._id}`} >
                                                            <BiEdit />
                                                        </Link>
                                                        <a onClick={() => {
                                                            swal({
                                                                title: `DELETE PRODUCT ${p.name}`,
                                                                text: "Are you sure to remove this product?",
                                                                icon: "warning",
                                                                buttons: true,
                                                                dangerMode: true,
                                                            })
                                                                .then((willDelete) => {
                                                                    if (willDelete) {
                                                                        deleteProduct(p._id);
                                                                    } else {

                                                                    }
                                                                });
                                                        }}>
                                                            <MdDelete />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Profile Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body><Camera save={__savePhoto} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
