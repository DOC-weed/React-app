import React from 'react';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import vision from '../assets/images/vision.png';
import '../assets/css/vision.css'


class VisionComponent extends React.Component {
render() {
    return(
        <>
        <Header/>
        <div className="fathervision">
            <div className="childvision">
            <img src={vision} alt="tutorialswebsite logo" className="image"/>
            </div>
            <div className="child2vision">
                <h1 className="tittlevision">Vision</h1>
                <p className="textvision">to be the most successful Mexican e-commerce company at the national level and stand out at the international level.</p>
            </div>
        </div>


        </>

    );
}
}
export default VisionComponent;