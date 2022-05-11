import './App.css';
import Home from './Paginas/Inicio';
import Formulario from './Paginas/Formulario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home/>} exact/>
       <Route path="formulario" element={<Formulario/>} exact/>
    </Routes>
  </Router>
  );
}

export default App;
