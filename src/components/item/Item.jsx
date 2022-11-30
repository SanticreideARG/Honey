import { Link } from "react-router-dom";
import pilOferta from './img/offertag.png'
import pilNovedad from './img/newtag.png'

const Item = ({ prod }) => {
  return (
    <div className="card cardProducto">
        <Link to={`/product/${prod.id}`}>
      <img src={prod.img} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          {prod.nombre} {prod.marca}
        </h5>
        <p className="card-text card-price"> ${prod.precio}</p>
        <Link to={`/product/${prod.id}`}>
          <button className="card-button">Detalles</button>
        </Link>
        <div className="pill-container">
        {prod.oferta ? (
          <img src={pilOferta} className="item-pill" alt="offer" />) : <></>}
        { prod.novedad ? (
          <img src={pilNovedad} className="item-pill"  alt="new" />) : <></> }
        </div>
      </div>
    </div>
  );
};

export default Item;
