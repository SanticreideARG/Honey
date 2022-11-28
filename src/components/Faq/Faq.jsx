import React from 'react';
import { Link } from "react-router-dom";


const Faq = () => {
    return (
        <div>
            <p>Preguntas Frecuentes</p>
            <Link to="/">
                <p>Volver a Inicio</p>
            </Link>
        </div>
    );
}

export default Faq;
