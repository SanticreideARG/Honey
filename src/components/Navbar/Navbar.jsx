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
          <img className="navbar-logo" src={logo} alt="" />
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
                <Link className="nav-link active" to="/">
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Novedades
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
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
                    Bottoms
                  </Link>
                  <Link className="dropdown-item" to="/category/3">
                    Vestidos
                  </Link>
                  <Link className="dropdown-item" to="/category/4">
                    Body
                  </Link>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <CartWidget />
            </form>
          </div>
        </div>
      </nav>
      </header>
    )
}

export default Navbar