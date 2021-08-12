import React from 'react';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import us from '../assets/images/us.png';
import '../assets/css/us.css'


class USComponent extends React.Component {
render() {
    return(
        <>
        <Header/>
        <div className="fatherus">
            <div className="childus">
            <img src={us} alt="tutorialswebsite logo" className="image"/>
            </div>
            <div className="child2us">
                <h1 className="tittleus">About us</h1>
                <p className="textus">We are a new Mexican e-commerce company. This company started as a university project at the request of the subject of Professional Web Development. </p>
            </div>
        </div>

        </>

    );
}
}
export default USComponent;