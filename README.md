# TP02 - Lenguajes IV

Sitio simple en React + Vite con tres páginas (Inicio, Servicios y Contacto) y navegación con React Router.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir la URL que muestra la terminal (por defecto http://localhost:5173).

## Estructura

```
src/
├── componentes/   Menu (barra de navegación)
├── paginas/       Inicio, Servicios, Contacto
├── App.jsx        Rutas
└── main.jsx       Punto de entrada
```

## Formulario de contacto (TP3)

En la página **Contacto** hay un formulario (`src/componentes/FormularioContacto.jsx`) que pide
Nombre y Apellido, Correo electrónico y un Mensaje de hasta 300 caracteres. Valida cada campo
al salir de él (`onBlur`), mientras se escribe (`onChange`) y al enviar (`onSubmit`), con mensajes
de error personalizados. Los datos se envían por mail con [EmailJS](https://www.emailjs.com).

### Configurar EmailJS

1. Crear una cuenta en emailjs.com.
2. **Email Services → Add New Service → Gmail**, conectar tu cuenta y copiar el **Service ID**.
3. **Email Templates → Create New Template → Contact Us**. La plantilla usa las variables
   `{{name}}`, `{{email}}`, `{{message}}`, `{{title}}` y `{{time}}`, que el formulario ya envía.
   Poner tu correo en "To Email", guardar y copiar el **Template ID** (pestaña Settings).
4. **Account → General** y copiar la **Public Key**.
5. Pegar los tres valores en `src/config/emailjs.js`.
