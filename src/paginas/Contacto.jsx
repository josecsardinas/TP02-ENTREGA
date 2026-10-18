import FormularioContacto from '../componentes/FormularioContacto'
import './Contacto.css'

// Mapa embebido de Google Maps (sin API key): Universidad Católica de Salta
const MAPA_URL =
  'https://www.google.com/maps?q=Universidad+Cat%C3%B3lica+de+Salta,+Campus+Castañares,+Salta&output=embed'

function Contacto() {
  return (
    <div className="pagina-contacto">
      <h2>CONTACTANOS:</h2>
      <div className="contenedor-contacto">
        <div className="columna-izquierda">
          <div className="info-contacto">
            <h3>Información de Contacto</h3>
            <div className="item-contacto">
              <span className="label">teléfono:</span>
              <p>+54 xxxxx </p>
            </div>
            <div className="item-contacto">
              <span className="label">mail:</span>
              <p>josefinacsardinas@gmail.com</p>
            </div>
          </div>

          <div className="mapa-contacto">
            <iframe
              title="Ubicación de la Universidad Católica de Salta"
              src={MAPA_URL}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <FormularioContacto />
      </div>
    </div>
  )
}

export default Contacto
