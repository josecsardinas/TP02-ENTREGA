// Array local de objetos con tecnologías y habilidades de TI.
// Las imágenes son logos de Devicon servidos desde el CDN de jsDelivr.
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const servicios = [
  {
    id: 1,
    nombre: 'Desarrollo Frontend con React',
    categoria: 'Desarrollo Web',
    descripcion: 'Interfaces modernas, reutilizables y responsivas con componentes, hooks y React Router.',
    nivel: 'Avanzado',
    imagen: `${CDN}/react/react-original.svg`,
  },
  {
    id: 2,
    nombre: 'Backend con Node.js',
    categoria: 'Desarrollo Web',
    descripcion: 'APIs REST y servicios del lado del servidor con JavaScript y el ecosistema npm.',
    nivel: 'Intermedio',
    imagen: `${CDN}/nodejs/nodejs-original.svg`,
  },
  {
    id: 3,
    nombre: 'Programación en Python',
    categoria: 'Programación',
    descripcion: 'Automatización, análisis de datos y scripting para resolver problemas de forma ágil.',
    nivel: 'Intermedio',
    imagen: `${CDN}/python/python-original.svg`,
  },
  {
    id: 4,
    nombre: 'Bases de Datos PostgreSQL',
    categoria: 'Datos',
    descripcion: 'Diseño de modelos relacionales, consultas SQL y optimización de bases de datos.',
    nivel: 'Intermedio',
    imagen: `${CDN}/postgresql/postgresql-original.svg`,
  },
  {
    id: 5,
    nombre: 'Control de versiones con Git',
    categoria: 'Herramientas',
    descripcion: 'Trabajo colaborativo con ramas, commits y repositorios en GitHub.',
    nivel: 'Avanzado',
    imagen: `${CDN}/git/git-original.svg`,
  },
  {
    id: 6,
    nombre: 'Contenedores con Docker',
    categoria: 'DevOps',
    descripcion: 'Empaquetado y despliegue de aplicaciones en contenedores reproducibles.',
    nivel: 'Básico',
    imagen: `${CDN}/docker/docker-original.svg`,
  },
]
