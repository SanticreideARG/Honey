import React from "react";
import { useContext } from "react";
import {Link} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const {cart, isInCart, addItem} = useContext(CartContext)

  const onAdd = (contador) => {
      addItem(producto, contador)
  }


  return (
    <div className="row g-0 product-detail">
      <div className="col-md-6">
        <div
          id="carouselExampleControls"
          class="carousel  carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={producto.img}
                alt="imagen producto"
                className="detail-image d-block"
              />
            </div>
            <div class="carousel-item">
              <img
                src={producto.img2}
                alt="imagen producto"
                className="detail-image d-block"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{producto.marca}</h5>
          <p className="card-text">{producto.nombre}</p>
          <p className="card-text"> {producto.descripcion}</p>
          <p className="card-text">${producto.precio}</p>
          <p className="card-text">Talle: {producto.talle}</p>
          <p className="card-text">Stock: {producto.stock}</p>
          <ItemCount stock = {producto.stock} onAdd={onAdd}/> <br />
          <button className="btn btn-secondary"><Link to="/checkout" className="nav-link">Finalizar compra</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
