import {useState} from 'react';
import {Link} from 'react-router-dom';
import upArrow from './img/up-arrow.svg';
import downArrow from './img/down-arrow.svg';


const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-light botItem'>
                <img src={downArrow} alt="" srcset="" />
            </button>
                    {contador}
            <button onClick={incrementar} className='btn btn-light botItem'>+</button>
            <br>
            </br><button className="btn btn-dark" onClick={agregarAlCarrito}><Link to="/cart" className="nav-link">Agregar al Carrito</Link></button>
        </>          

    );
}

export default ItemCount;