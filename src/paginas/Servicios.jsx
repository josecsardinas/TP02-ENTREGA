import { servicios } from '../datos/servicios'
import './Servicios.css'

function Servicios() {
  return (
    <div className="pagina-servicios">
      <h2>NUESTROS SERVICIOS: </h2>
      <div className="lista-servicios">
        {servicios.map((servicio) => (
          <div className="servicio" key={servicio.id}>
            <img
              className="servicio-imagen"
              src={servicio.imagen}
              alt={`Logo de ${servicio.nombre}`}
              loading="lazy"
            />
            <span className="servicio-categoria">{servicio.categoria}</span>
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
            <span className="servicio-nivel">Nivel: {servicio.nivel}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios
