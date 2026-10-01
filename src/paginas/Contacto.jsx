import './Contacto.css'

function Contacto() {
  return (
    <div className="pagina-contacto">
      <h2>CONTACTANOS:</h2>
      <div className="contenedor-contacto">
        <div className="info-contacto">
          <h3>Información de Contacto</h3>
          <div className="item-contacto">
            <span className="label">telefono:</span>
            <p>+54 xxxxx </p>
          </div>
          <div className="item-contacto">
            <span className="label">mail:</span>
            <p>josefinacsardinas@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
