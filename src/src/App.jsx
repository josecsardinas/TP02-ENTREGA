import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu'
import Pie from './componentes/Pie'
import Inicio from './paginas/Inicio'
import Servicios from './paginas/Servicios'
import Contacto from './paginas/Contacto'
import './App.css'

function App() {
  return (
    <Router>
      <div className="contenedor-principal">
        <Menu />
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Pie />
      </div>
    </Router>
  )
}

export default App
