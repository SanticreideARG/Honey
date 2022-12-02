import { Link } from 'react-router-dom';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './img/transparent-logo.png';
const Navbar = () =>{
    return (
      <header className='header'>      
        <nav className="navbar navbar-expand-lg bg-primary" >
        <div className="container-fluid">
          <Link to={'/'}>
          <img className="navbar-logo brand" src={logo} alt="" />
          </Link>
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
                <Link className="nav-link" to="/">
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newproducts">
                  Novedades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/offers">
                  Ofertas
                </Link>
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
                  Categorias
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/category/1">
                    Abrigos
                  </Link>
                  <Link className="dropdown-item" to="/category/2">
                    Faldas/shorts
                  </Link>
                  <Link className="dropdown-item" to="/category/3">
                    Vestidos
                  </Link>
                  <Link className="dropdown-item" to="/category/4">
                    Bodys
                  </Link>
                </div>
              </li>
            </ul>
              <CartWidget />
          </div>
        </div>
      </nav>
      </header>
    )
}

export default Navbar