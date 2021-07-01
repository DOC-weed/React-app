import React, { useEffect, useState } from 'react';
import '../assets/css/addProduct.css';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import { Link } from 'react-router-dom';


import NumberFormat from 'react-number-format';

export default function ProveedorPage(props) {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [description, setDescription] = React.useState('');
    const [thumbnail, setThumbnail] = React.useState('');
    const [image, setImage] = React.useState('');
    const [stock, setStock] = React.useState(0);
    const [categories, setCategories] = React.useState([{ id: 1, name: 'Phone accessories', description: "" }, { id: 2, name: 'Electronics', description: "" }]);
    const [category, setCategory] = React.useState({});
    const [fileUrl, setFileUrl] = React.useState('');


    useEffect(() => {
        if (props.match.params.action != 'add') {
            console.log('editar');
        } else {
        }
    }, []);

    function setPriceValue(values) {
        const { formattedValue, value } = values;

        setPrice(value);
    }

    function setStockValue(values) {
        const { formattedValue, value } = values;

        setStock(value);
    }

    function handleBlur(e) {
        const { name, value } = e.target;
        const newValue = value.substring(1);

        if (name == 'price' && value == '') {
            setPrice(0)
        } else if (name == 'stock' && value == '') {
            setStock(0)
        }
    }

    function handleThumbnail(e) {
        const [file] = e.target.files;
        setFileUrl(URL.createObjectURL(file))

    }

    return (
        <div style={{ width: '100%' }}>
            <Header />
            <div className="row" id="containerProduct">
                <div className="col-sm-12 col-md-12 col-lg-7" style={{ width: '100%', margin: 'auto' }}>
                    <form>
                        <div class="form-group">
                            <label for="name">Product name: </label>
                            <input type="text" class="form-control" id="name" placeholder="Enter product name..." onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="description">Description: </label>
                            <textarea class="form-control" id="description" rows="4" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div class="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label for="price">Price: </label>
                                    <NumberFormat className="form-control numberFormat" value={price} name="price" id="price" thousandSeparator={true} prefix={'$'} decimalScale={2} onChange={setPriceValue} onBlur={handleBlur} />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label for="stock">Stock: </label>
                                    <NumberFormat className="form-control numberFormat" name="stock" value={stock} id="stock" thousandSeparator={true} decimalScale={2} onChange={setStockValue} onBlur={handleBlur} />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label for="thumbnail">Thumbnail: </label>
                                    <input className="form-control" type="file" accept="images/*" id="thumbnail" />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <label for="images">Images: </label>
                                    <input className="form-control" type="file" accept="images/*" id="images" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group btn-actions">
                            <Link to="/seller/profile"><button className="btn btn-danger" type="button">Cancelar</button></Link>
                            <button className="btn btn-info" type="button">Limpiar</button>
                            <button className="btn guardar" type="button">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
