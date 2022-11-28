import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import { Link } from "react-router-dom";
import EmptyCart from './img/box-empty.svg'

const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
           
            {cart.length === 0 ? 
            <div className="center-this">
                <img className="mt-4" src={EmptyCart} alt="" />
                <p className="center-this mt-4">Tu carrito esta vacio</p>
                <Link to={'/'}><button className="btn btn-dark center-this mt-4">Ir al inicio</button></Link>
                <br></br><br></br><br></br><br></br><br></br>
            </div> 
            : 
            <div className="container mt-4 ">
                {cart.map((prod,indice) =><div className="card mb-3" key={indice}>
                <div className="container cart-item">
                    <img src={prod.img} className="img-fluid" alt="..." />
                    <div className="cart-item-detail">
                        <div className="cart-item-body">
                            <p className="cart-title">{prod.nombre}</p>
                            <p className="cart-title"> {prod.marca}</p>
                            <p className="cart-text">Cantidad: {prod.cant}</p>
                            <p className="cart-text">Precio por unidad: ${prod.precio}</p>
                            <p className="cart-text">Subtotal: ${prod.precio * prod.cant}</p>
                        </div>
                        <button className="btn remove-item-btn" onClick={() => removeItem(prod.id)}>  Eliminar Producto</button>
                    </div>
                </div>
            </div>
            )}
            <div className="cart-price-container">
                <p className="total-cart">Total: ${totalPrice()}</p>
                <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                <Link to="/checkout">
                    <button className="btn btn-finalizar">Finalizar Compra</button>
                </Link>
            </div>
            </div>
            }
        </>
        
    );
}

export default Cart;