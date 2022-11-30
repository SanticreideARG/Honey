import React from 'react';
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className='container-sm'>
                <h3 className='center-this mt-3'>Contactanos</h3>
                <form action="" method="get">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-Mail</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Escribinos!</label>
                    <input type="placeholder" className="form-control" name="message" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                <Link to="/">
                <p className='mt-5'>Volver a Inicio</p>
            </Link>
        </div>
    );
}

export default Contact;
