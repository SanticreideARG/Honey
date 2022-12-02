import { Link } from "react-router-dom";
import failimage from '../Sucess/img/error.svg'

const NotFound = () => {
  return (
    <div className="container">
      <h3 className="mt-4 mb-4 sec-title center-this">Pagina no encontrada</h3>
      <img className="notfound-image center-this" src={failimage} alt="" srcset="" />
      
      <Link className="mt-3 center-this" to="/">
        <p>Volver a Inicio</p>
      </Link>
    </div>
  );
};

export default NotFound;
