import React from 'react';
import { getOrdenCompra} from "../../assets/firebase"
const AdminBoard = (props) => {

    getOrdenCompra()

console.log(props)
    return (
        <div className='container'>
             <h3 className="mt-4 mb-4 center-this sec-title">Menu de Administracion</h3>
             <button>Crear Nuevo Producto</button>
        </div>
    );
}

export default AdminBoard;
