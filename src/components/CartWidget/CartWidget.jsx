import React from 'react';
import { Link } from "react-router-dom";
import cart from './img/cart.png';

const CartWidget = () => {
    return (
        <>
          <Link className="nav-link" to="/cart">
                        <button className="btn">
                        <img className="navbar-logo" src={cart} alt="" />
                        </button>
                    </Link>
        </>
    );
};

export default CartWidget;