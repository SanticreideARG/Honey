import React from 'react';
import logo from '../Navbar/img/transparent-logo.png';
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <div className='container'>
            <hr></hr>
            <div className='grid-container'>
                <div className="footer-section">
                <Link  to="/">
                <img src={logo} alt="" className='center-this footer-logo' />
                </Link>

                </div>
                <div className="footer-section">

                <Link  to="/terms">
                    <p className='footer-link text-center decoration-none'>Terminos y Politicas</p>
                </Link>

                <Link  to="/faq">
                    <p className='footer-link text-center decoration-none'>Ayuda / FAQ</p>
                </Link>
                </div>
                <div className="footer-section">
                <Link  to="/contact">
                    <p className='footer-link text-center decoration-none'>Contacto</p>
                </Link>
                <a href="https://santiagocreide.netlify.app/" target="_blank" rel="noopener noreferrer"  className=' center-this footer-link'>Web Designer</a><br></br>
                </div>
            </div>
            <hr></hr>
            </div>
        </footer>
    );
}

export default Footer;
