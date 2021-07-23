import React,{ useEffect }  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/Home.css';
import Button from 'react-bootstrap/Button'
import HeaderComponent from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import slider1 from '../assets/images/banner.jpeg';
import placehold from '../assets/images/placeholder.png';
import axios from 'axios';
import { Link } from 'react-router-dom';


/*import lenguajes from '../assets/images/lenguajes.png';*/
/*import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/

export default function Home(){
  

    const [products , setproducts] = React.useState([]);
    const url ='https://dwi-back-end.herokuapp.com/';
    

    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
      <div className="card">
        <img src={placehold} className="card-img-top" alt="..."/>
        <div className="card-body">
          <Link to={`/product/${number._id}`} ><h5 className="card-title">{number.name}</h5></Link>
          <p className="card-text">{number.description}</p>
          <p className="card-text">${number.price}</p>
          <button className="btn btn-warning ">Add to cart</button>
        </div>
      </div>
      );
      return (
        <div className="conttt">{listItems}</div>
      );
    }
    useEffect(async () => {
      await axios.get(url+'product').then(res=>{
        setproducts(res.data.product);

      }).catch(err=>{

      });

    },[]);
     
    return (
      < >
        <HeaderComponent/>
        <div className="father">

    <div className="container_1_home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slider "
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slider"
            src={slider1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-slider"
            src={slider1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="container_2_home">
      <div className="childrenone">
        <h2>OFFERS</h2>
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Product</h5>
            <p className="card-text">Description short about the product</p>
            <p href="#" className="card-text">$200</p>
          </div>
        </div>
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Product</h5>
          <p className="card-text">Description short about the product</p>
          <p href="#" className="card-text">$200</p>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Product</h5>
          <p className="card-text">Description short about the product</p>
          <p href="#" className="card-text">$200</p>
        </div>
      </div>
        
      </div>
      <div className="childrentwo">
      <NumberList numbers={products}/>
     

      </div>

    </div>




 
  </div> 
        

        

      </>);
  
}


