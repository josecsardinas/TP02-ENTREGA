import { useEffect, useState } from 'react'
import './Inicio.css'

// API pública de dev.to (sin clave, con CORS habilitado)
const API_URL = 'https://dev.to/api/articles?tag=react&per_page=6'

function Inicio() {
  const [articulos, setArticulos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controlador = new AbortController()

    async function cargarArticulos() {
      try {
        const respuesta = await fetch(API_URL, { signal: controlador.signal })
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)
        const datos = await respuesta.json()
        setArticulos(datos)
      } catch (e) {
        if (e.name !== 'AbortError') setError('No se pudieron cargar los artículos.')
      } finally {
        if (!controlador.signal.aborted) setCargando(false)
      }
    }

    cargarArticulos()
    return () => controlador.abort()
  }, [])

  return (
    <div className="pagina-inicio">
      <h2>esta es la pagina de Inicio</h2>
      <div className="contenido-inicio">
        <p>Bienvenido a nuestro sitio web!!</p>
      </div>

      <h3 className="titulo-articulos">Últimos artículos sobre React (dev.to)</h3>

      {cargando && <p className="mensaje-estado">Cargando artículos...</p>}
      {error && <p className="mensaje-estado mensaje-error">{error}</p>}

      <div className="lista-articulos">
        {articulos.map((a) => (
          <article className="articulo" key={a.id}>
            <img
              className="articulo-imagen"
              src={a.cover_image || a.social_image}
              alt={`Portada de ${a.title}`}
              loading="lazy"
            />
            <div className="articulo-cuerpo">
              <h4>{a.title}</h4>
              <p className="articulo-autor">Por {a.user.name}</p>
              <p className="articulo-meta">
                {a.readable_publish_date} · ❤ {a.public_reactions_count} reacciones
              </p>
              <a href={a.url} target="_blank" rel="noopener noreferrer">
                Leer artículo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Inicio
