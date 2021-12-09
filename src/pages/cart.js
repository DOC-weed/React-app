import React, { useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/HeaderComponent';
import '../assets/css/cart.css';
import { MdDelete } from 'react-icons/md'
import logo from '../assets/images/placeholder.png';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeValues = this.changeValues.bind(this);
        this.checkout = this.checkout.bind(this)
        this.state = {
            data: [],
            cart: JSON.parse(localStorage.getItem('cart')),
            newValue: 0,
            items: new Map()
        }
    }

    UNSAFE_componentWillMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('cart')),
        })
        this.createState(JSON.parse(localStorage.getItem('cart')));
    }

    /*const [data, setdata] = React.useState([]);
    let cart = JSON.parse(localStorage.getItem('cart'));
    let history = useHistory();
    let newValue = 0;

    const [state, setState] = React.useState(new Map())

    useEffect(() => {

        console.log(cart);
        setdata(cart);
        createState(cart)

    }, []);

    console.log(cart);
    console.log(data);*/

    deleteItem(index) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let cart = this.state.data;
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart))
                    this.setState({
                        data: cart
                    })
                    window.location.href = window.location.href;
                } else {

                }
            });

    }

    changeValues(e) {
        const { name, value } = e.target;
        this.setState(prevState => ({
            items: prevState.items.set(name, parseFloat(value))
        }))
        const n = name.substring(4,name.length)
        this.checkout(n, value);
    }

    createState(data) {
        if(data == undefined || data == null || data == ''){
            data = [];
        }
        data.map((i, index) =>
            this.setState(prevState => ({
                items: prevState.items.set('item' + index, i.quantity)
            }))
        )
    }

    checkout(ind, value){
        let arr=[];
        for(const [index,i] of this.state.cart.entries()){
            if(index == ind){
                let obj = {
                    name: i.name,
                    description: i.description,
                    price: i.price,
                    quantity: value,
                    image:i.image
                }
                arr.push(obj)
            }else{
                arr.push(i)
            }
        }
        localStorage.setItem('cart', JSON.stringify(arr))
    }

    CartList(data) {
        const cart = data;
        console.log(cart);
        const listItems = cart.map((item, index) =>
            <div className="container_cart_list pb-2">
                <div className="cart_list_img px-3 py-3">
                    <img src={item.image} alt="logo" />
                </div>
                <div className="cart_list_text">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
                <div className="cart_list_quantity">
                    <p>$ {item.price}</p>
                    <input type="number" name={'item' + index} defaultValue={parseFloat(this.state.items.get('item' + index))} onClick={this.changeValues} min={1}/>
                </div>
                <div className="cart_list_button px-3">
                    <button className="btn btn-danger" onClick={() => this.deleteItem(index)}><MdDelete /></button>
                </div>
            </div>
        );
        return (
            <div className="container_cart_list_father my-5">{listItems}</div>
        );
    }
    render() {
        return (
            <>
                <Head />
                {(this.state.cart === null) ?
                    <div className="container_cart mx-auto my-5 py-5">
                        <h1>¡Oh no your cart is empty! Please back to store and add some products... </h1>
                        <Link to="/home"><button className="btn btn-warning">Go to store</button></Link>
                    </div>
                    :
                    <div>
                        {
                            this.CartList(this.state.data)
                        }

                        <div className="checkout_section my-5">
                            <Link to="/home"><button className="btn btn-primary mr-2" >Back to store</button></Link>
                            <Link to="/checkout"><button className="btn btn-warning" >Go to checkout</button></Link>
                        </div>
                    </div>
                }


            </>
        );
    }
}

export default Cart;