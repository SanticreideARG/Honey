import React from 'react';
import logo from '../Navbar/img/transparent-logo.png';


const Footer = () => {
    return (
        <footer>
            <div className='container'>
            <hr></hr>
            <div className='grid-container'>
                <div className="footer-section">
                    <img src={logo} alt="" className='footer-logo' />
                </div>
                <div className="footer-section">
                <p>Buscanos en Instagram</p>
                <p>© 2022 Apollo Cayser Studio</p>
                </div>
                <div className="footer-section"></div>
            </div>
            <hr></hr>
            
            </div>
        </footer>
    );
}

export default Footer;
