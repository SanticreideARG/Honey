import cart from './img/cart.png';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                            <img className="navbar-logo" src={cart} alt="" />
                    </Link>
                </li>
                <li className="nav-item">
                    <p className='cart-widget-quantity'>{getItemQuantity()}</p>
                </li>
            </ul>     
            </>
    );
}

export default CartWidget;