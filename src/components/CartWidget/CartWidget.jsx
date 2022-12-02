import cart from './img/cart-svg.svg';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
        <Link className="nav-link" to="/cart">
            <ul className='navbar-nav me-auto cartWidget'>
                 <img className="navbar-cart" src={cart} alt="" />
                <li className="nav-item">
                    { getItemQuantity() >= 1 && <span className='cart-widget-quantity'>{getItemQuantity()}</span>}
                        
                </li>
            </ul>     
            </Link>
            </>
    );
}

export default CartWidget;