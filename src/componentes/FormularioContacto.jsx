import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../config/emailjs'
import './FormularioContacto.css'

const MAX_MENSAJE = 300

const valoresIniciales = {
  nombre: '',
  email: '',
  mensaje: '',
}

// Cada campo tiene su propia validación y sus mensajes de error personalizados
function validarCampo(campo, valor) {
  const texto = valor.trim()

  if (campo === 'nombre') {
    if (texto === '') return 'Ingresá tu nombre y apellido.'
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü' ]+$/.test(texto))
      return 'El nombre solo puede contener letras y espacios.'
    if (texto.split(/\s+/).length < 2)
      return 'Escribí tu nombre y tu apellido separados por un espacio.'
    if (texto.length < 5) return 'El nombre y apellido es demasiado corto.'
    if (texto.length > 60) return 'El nombre y apellido no puede superar los 60 caracteres.'
  }

  if (campo === 'email') {
    if (texto === '') return 'Ingresá tu correo electrónico.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(texto))
      return 'El correo no es válido. Ejemplo: nombre@correo.com'
  }

  if (campo === 'mensaje') {
    if (texto === '') return 'Escribí un mensaje.'
    if (texto.length < 10) return 'El mensaje debe tener al menos 10 caracteres.'
    if (valor.length > MAX_MENSAJE)
      return `El mensaje no puede superar los ${MAX_MENSAJE} caracteres.`
  }

  return ''
}

function validarTodo(valores) {
  const errores = {}
  Object.keys(valores).forEach((campo) => {
    const error = validarCampo(campo, valores[campo])
    if (error) errores[campo] = error
  })
  return errores
}

function FormularioContacto() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [tocados, setTocados] = useState({})
  const [estado, setEstado] = useState('inicial') // inicial | enviando | exito | error

  // onChange: actualiza el valor y, si el campo ya fue tocado, lo revalida
  const handleChange = (event) => {
    const { name, value } = event.target
    setValores({ ...valores, [name]: value })
    if (tocados[name]) {
      setErrores({ ...errores, [name]: validarCampo(name, value) })
    }
    if (estado !== 'inicial' && estado !== 'enviando') setEstado('inicial')
  }

  // onBlur: al salir del campo se valida y se muestra el error
  const handleBlur = (event) => {
    const { name, value } = event.target
    setTocados({ ...tocados, [name]: true })
    setErrores({ ...errores, [name]: validarCampo(name, value) })
  }

  // onSubmit: valida todo y, si está ok, envía con EmailJS
  const handleSubmit = async (event) => {
    event.preventDefault()

    const nuevosErrores = validarTodo(valores)
    setErrores(nuevosErrores)
    setTocados({ nombre: true, email: true, mensaje: true })
    if (Object.keys(nuevosErrores).length > 0) return

    setEstado('enviando')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Variables que usa la plantilla "Contact Us" de EmailJS
          name: valores.nombre.trim(),
          email: valores.email.trim(),
          message: valores.mensaje.trim(),
          title: 'Nuevo mensaje desde el sitio',
          time: new Date().toLocaleString('es-AR'),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setEstado('exito')
      setValores(valoresIniciales)
      setTocados({})
      setErrores({})
    } catch (error) {
      console.error('Error al enviar con EmailJS:', error)
      setEstado('error')
    }
  }

  const clasesCampo = (campo) =>
    'campo' + (tocados[campo] && errores[campo] ? ' campo-error' : '') +
    (tocados[campo] && !errores[campo] && valores[campo] ? ' campo-ok' : '')

  const caracteres = valores.mensaje.length

  return (
    <form className="formulario-contacto" onSubmit={handleSubmit} noValidate>
      <h3>Envianos un mensaje</h3>

      <div className={clasesCampo('nombre')}>
        <label htmlFor="nombre">Nombre y Apellido</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ej: Juana Pérez"
          value={valores.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={60}
          aria-invalid={Boolean(tocados.nombre && errores.nombre)}
          aria-describedby="error-nombre"
        />
        <p className="mensaje-error" id="error-nombre">
          {tocados.nombre && errores.nombre}
        </p>
      </div>

      <div className={clasesCampo('email')}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Ej: juana@correo.com"
          value={valores.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(tocados.email && errores.email)}
          aria-describedby="error-email"
        />
        <p className="mensaje-error" id="error-email">
          {tocados.email && errores.email}
        </p>
      </div>

      <div className={clasesCampo('mensaje')}>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          placeholder="Escribí tu consulta (máximo 300 caracteres)"
          value={valores.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={MAX_MENSAJE}
          aria-invalid={Boolean(tocados.mensaje && errores.mensaje)}
          aria-describedby="error-mensaje"
        />
        <div className="pie-campo">
          <p className="mensaje-error" id="error-mensaje">
            {tocados.mensaje && errores.mensaje}
          </p>
          <span className={'contador' + (caracteres >= MAX_MENSAJE ? ' contador-limite' : '')}>
            {caracteres}/{MAX_MENSAJE}
          </span>
        </div>
      </div>

      <button type="submit" className="boton-enviar" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      {estado === 'exito' && (
        <p className="aviso aviso-exito" role="status">
          ¡Gracias! Tu mensaje se envió correctamente.
        </p>
      )}
      {estado === 'error' && (
        <p className="aviso aviso-error" role="alert">
          No se pudo enviar el mensaje. Intentá de nuevo más tarde.
        </p>
      )}
    </form>
  )
}

export default FormularioContacto
