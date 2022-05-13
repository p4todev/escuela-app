import './App.css';
import Home from './Paginas/Inicio';
import Formulario from './Paginas/Formulario';
import LoginPage from './Paginas/LoginPage';
import Notas from './Paginas/Notas';
import InfoAlumno from './Paginas/infoAlumno';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home/>} exact/>
       <Route path="alumnos/formulario" element={<Formulario/>} exact/>
       <Route path="alumnos/inicio-sesion" element={<LoginPage/>} exact/>
       <Route path="alumnos/notas" element={<Notas/>} exact/>
       <Route path="alumnos/info" element={<InfoAlumno/>}  exact/>
    </Routes>
  </Router>
  
  );
}

export default App;
