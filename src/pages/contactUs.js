import React from 'react';
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';
import '../assets/css/contactus.css';


class ContactUSComponent extends React.Component {
render() {
    return(
        <>
        <Header/>
        <div className="fathercontactus">
            <div className="childcontactus">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.476640491505!2d-102.3554368851024!3d21.839143185565117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429eb8c66ba4c57%3A0x800a85fa04315af2!2sUniversidad%20Tecnol%C3%B3gica%20de%20Aguascalientes!5e0!3m2!1ses-419!2smx!4v1628558234647!5m2!1ses-419!2smx" className="mapa" allowfullscreen="" loading="lazy"></iframe>
        
            </div>
            <div className="child2contactus">
                <h1 className="tittlecontactus">Contact us</h1>
                <p className="textcontactus">We are a completely digital store, this means that we are not a physical store, therefore, we do not have a physical address. But, you can find us in Aguascalientes MX, Blvrd Juan Pablo II, La Cantera, 20200 Exhacienda, there you can contact the creators of this e-commerce. </p>
            </div>
        </div>
        </>
        

    );
}
}
export default ContactUSComponent;