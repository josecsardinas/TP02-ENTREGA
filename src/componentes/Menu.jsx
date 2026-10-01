import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <nav className="menu">
      <div className="menu-contenedor">
        <h1 className="logo">TP02 - LENG IV</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
