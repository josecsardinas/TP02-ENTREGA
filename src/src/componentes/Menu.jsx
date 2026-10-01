import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <nav className="menu">
      <div className="menu-contenedor">
        <h1 className="logo">TP02 - LENG IV</h1>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/servicios">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
