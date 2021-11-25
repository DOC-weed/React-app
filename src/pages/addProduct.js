import React, {
    useEffect,
    useState
} from 'react';
import '../assets/css/addProduct.css';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import {
    Link
} from 'react-router-dom';
import swal from 'sweetalert';
import {
    useHistory
} from 'react-router';
import {
    storage
} from '../firebase';

import NumberFormat from 'react-number-format';
import axios from 'axios';

export default function ProveedorPage(props) {
    const [customerId, setCustomerId] = React.useState(localStorage.getItem('_id'));
    const [productCode, setProductCode] = React.useState('');
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [description, setDescription] = React.useState('');
    const [thumbnail, setThumbnail] = React.useState('');
    const [image, setImage] = React.useState({});
    const [image2, setImage2] = React.useState('');
    const [stock, setStock] = React.useState(0);
    const [categories, setCategories] = React.useState([]);
    const [category, setCategory] = React.useState({});
    const [fileUrl, setFileUrl] = React.useState('');
    const [editar, setEditar] = React.useState(false);

    let history = useHistory();

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        if (props.match.params.action != 'add') {
            EditProduct(props.match.params.action);
            setEditar(true);
        } else {}
        
    }, [category])

    async function getCategories() {
        await axios.get(`https://dwi-back-end.herokuapp.com/category`).then(c => {
            setCategories(c.data.category)
        })
    }

    function setPriceValue(values) {
        const {
            value
        } = values;

        setPrice(value);
    }

    function setStockValue(values) {
        const {
            value
        } = values;

        setStock(value);
    }

    function handleBlur(e) {
        const {
            name,
            value
        } = e.target;
        let newValue;

        if (name == 'price') {
            newValue = value.substring(1);
        }

        if (name == 'price' && newValue == '') {
            setPrice(0)
        } else if (value == 'stock' && value == '') {
            setStock(0)
        }
    }

    function ChangeCategory(e) {
        const {
            value
        } = e.target;
        setCategory(value)

    }
    async function ChangeImage(e){
        const img = e.target.files[0]
        await storage.ref('IMAGES/'+customerId+'/'+name).put(img).then((res)=>{
            res.ref.getDownloadURL().then((downloadURL) => {
                setImage2(downloadURL);
                
            });
        }).catch((err)=>{
            console.log(err);
        })
        
        console.log(img);
    }

    function onFocus(event) {
        event.target.select();
    }

    async function EditProduct(id) {
        await axios.get(`https://dwi-back-end.herokuapp.com/product/${id}`).then(p => {
            for (const i of[p.data.productDB]) {
                setProductCode(i.sku)
                setName(i.name)
                setDescription(i.description)
                setPrice(i.price)
                setStock(i.stock)
                setCategory(i.category)
            }
        })
    }

    async function Save(event) {
        event.preventDefault();
        let objcategory = {};
        
        console.log(image2)
        for (const c of categories) {
            if (category == c._id) {
                objcategory = {
                    name: c.name,
                    description: c.description
                }
            }
        }
        

        if (!editar) {
            const obj = {
                customer_id: customerId,
                sku: productCode,
                name: name,
                price: price,
                description: description,
                stock: stock,
                category: objcategory,
                image:image2
            }
            
            await axios.post(`https://dwi-back-end.herokuapp.com/product`, obj).then(p => {
                swal({
                    title: "Success!",
                    text: "Product added successfully",
                    icon: "success"
                });
                Clear();
            })
        } else {
            const obj = {
                sku: productCode,
                name: name,
                price: price,
                description: description,
                stock: stock,
                image:image2
            }
            await axios.put(`https://dwi-back-end.herokuapp.com/product/${props.match.params.action}`, obj).then(p => {
                swal({
                    title: "Success!",
                    text: "product saved successfully",
                    icon: "success"
                });
                history.push('/seller/profile');
            })
        }
    }

    function Clear() {
        setProductCode('')
        setName('');
        setPrice(0);
        setDescription('');
        setStock(0);
        setCategory('')
    }

    return ( 
        <div style={{ width: '100%' }}>
            <Header />
            <div className="row" id="containerProduct">
                <div className="col-sm-12 col-md-12 col-lg-9" style={{ width: '100%', margin: 'auto' }}>
                    <form className="form_containerProducto" onSubmit={Save}>
                        <div class="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-md-3 col-lg-3" onFocus={onFocus}>
                                    <label for="name">Product code: </label>
                                    <input type="text" required onFocus={onFocus} class="form-control" id="code" placeholder="Product code..." onChange={(e) => setProductCode(e.target.value)} value={productCode} />
                                </div>
                                <div className="col-sm-12 col-md-9 col-lg-9">
                                    <label for="name">Product name: </label>
                                    <input type="text" required onFocus={onFocus} class="form-control" id="name" placeholder="Enter product name..." onChange={(e) => setName(e.target.value)} value={name} />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description">Description: </label>
                            <textarea class="form-control" required onFocus={onFocus} id="description" rows="4" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                        </div>
                        <div class="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6" onFocus={onFocus}>
                                    <label for="price">Price: </label>
                                    <NumberFormat onFocus={onFocus} required className="form-control numberFormat" value={(price)} name="price" id="price" thousandSeparator={true} prefix={'$'} decimalScale={2} onValueChange={(values) => setPriceValue(values)} onBlur={handleBlur} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label for="stock">Stock: </label>
                                    <NumberFormat onFocus={onFocus} required className="form-control numberFormat" name="stock" value={stock} id="stock" thousandSeparator={true} decimalScale={2} onValueChange={(values) => setStockValue(values)} onBlur={handleBlur} />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                <label for="input">Imagen: </label>
                                <input class="form-control" type="file" name="imagep" id="_image"   onChange={ChangeImage} required />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label for="select">Categories: </label>
                                    <select class="form-control" aria-label="Default select example" value={category} required onChange={ChangeCategory}>
                                        <option value="">Choose a category...</option>
                                        {
                                            categories.map(c => (
                                                <option key={c._id} value={c._id}>{c.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group btn-actions">
                            <Link to="/seller/profile">
                                <button className="btn btn-danger" type="button">Cancel</button>
                            </Link>
                            <button className="btn btn-info" type="button" onClick={Clear}>Clear</button>
                            <button className="btn guardar" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
)
}