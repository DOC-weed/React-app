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


    useEffect(() => {
        if (props.match.params.action != 'add') {
            console.log('editar');
        } else {
            console.log("agregar");
        }
    }, []);

    function setPriceValue(values){
        const {formattedValue, value} = values;

        setPrice(value);
    }

    return (
        <div style={{ width: '100%' }}>
            <Header />
            <div className="row" id="containerProduct">
                <div className="col-sm-5">
                    <div className="row">
                        <div className="col-sm-3 imgList"></div>
                        <div className="col-sm-9 primaryImg">
                        </div>
                    </div>
                </div>
                <div className="col-sm-7" style={{ width: '100%' }}>
                    <form>
                        <div class="form-group">
                            <label for="name">Product name: </label>
                            <input type="text" class="form-control" id="name" placeholder="Enter product name..." onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="description">Description: </label>
                            <textarea class="form-control" id="description" rows="3" onChange={(e)=>setDescription(e.target.value)}></textarea>
                        </div>
                        <div class="form-group">
                            <label for="price">Price: </label>
                            <NumberFormat class="form-control" id="price" thousandSeparator={true} prefix={'$'} decimalScale={2} onChange={setPriceValue}/>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
