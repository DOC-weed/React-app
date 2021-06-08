import React from 'react';
import '../assets/css/FooterComponent.css';
import logo from '../assets/images/logo.png';

class FooterComponent extends React.Component {
    render() {
        return ( 
            <div className="container">
                <div className="img-container">
                    <img className="img" src={logo} alt="" />
                </div>
                <div className="text-container">
                    <p className="text">This project was developed by students from the Universidad Tecnologica de Aguascalientes</p>
                </div>
            </div>    

        );
    }
}

export default FooterComponent;