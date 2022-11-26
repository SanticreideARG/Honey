import { Link } from "react-router-dom";
const Item = ({ prod }) => {
  return (
    <div className="card cardProducto">
      <img src={prod.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {prod.nombre} {prod.marca}
        </h5>
        <p className="card-text">Precio: ${prod.precio}</p>
        <Link to={`/product/${prod.id}`}>
          <button className="card-button">Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
