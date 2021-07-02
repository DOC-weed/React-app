import React from 'react';
import '../assets/css/FooterComponent.css';
import logo from '../assets/images/logo.png';
import kawaii from '../assets/images/kawaii.png'

class FooterComponent extends React.Component {
    render() {
        return ( 
            <div className="container_footer">
                <div className="kawaii-container">
                    <img src={kawaii} />
                </div>
                
                <div className="text-container">
                    <p className="text">This project was developed by students from the Universidad Tecnologica de Aguascalientes</p>
                </div>
            </div>    

        );
    }
}

export default FooterComponent;