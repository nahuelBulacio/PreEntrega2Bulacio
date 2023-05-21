import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
<nav className="navbar navbar-expand-lg navegacion">
  <div className="container-fluid">
    <Link className="navbar-brand titulo" to="/">Elegantis</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact-us">Contacto</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Comidas y bebidas
          </Link>
          <div className="products">
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/productos/Pizza">Pizzas</Link></li>
          <li><Link className="dropdown-item" to="/productos/Sandwich">Sandwiches</Link></li>
          <li><Link className="dropdown-item" to="/productos/Al plato">Al plato</Link></li>
          <li><Link className="dropdown-item" to="/productos/Sopa">Sopas</Link></li>
          <li><Link className="dropdown-item" to="/productos/Postre">Postres</Link></li>
          <li><Link className="dropdown-item" to="/productos/Bebida sin alcohol">Bebidas sin alcohol</Link></li>
          <li><Link className="dropdown-item" to="/productos/Bebida con alcohol">Bebidas con alcohol</Link></li>

        </ul>
        </div>
        </li>
      </ul>
      <CartWidget></CartWidget>
      
    </div>
  </div>

</nav>
    )
}

export {NavBar}