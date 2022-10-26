import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './img/transparent-logo.png';

const Navbar = () =>{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse"
            id="navbarColor01"
            style={{}}
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Novedades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ofertas
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Blusas
                  </a>
                  <a className="dropdown-item" href="#">
                    Remeras
                  </a>
                  <a className="dropdown-item" href="#">
                    Vestidos
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Pantalones
                  </a>
                  <a className="dropdown-item" href="#">
                    Sacos & Blazers
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <CartWidget />
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Buscar"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar