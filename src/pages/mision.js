import React from 'react';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import mision from '../assets/images/mision.png';
import '../assets/css/mision.css';


class MisionComponent extends React.Component {
render() {
    return(
        <>
        <Header/>
        <div className="fathermision">
            <div className="childmision">
            <img src={mision} alt="tutorialswebsite logo" className="image"/>
            </div>
            <div className="child2mision">
                <h1 className="tittlemision">Mision</h1>
                <p className="textmision">Leverage technology and the experience of our employees to offer consumers the best online shopping experience </p>
            </div>
        </div>

        </>
    );
}
}
export default MisionComponent;