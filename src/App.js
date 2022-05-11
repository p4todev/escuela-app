import './App.css';
import Home from './Paginas/Inicio';
import LoginPage from './Paginas/LoginPage';
import Formulario from './Paginas/Formulario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home/>} exact/>
       <Route path="formulario" element={<Formulario/>} exact/>
       <Route path="inicio-sesion" element={<LoginPage/>} exact/>
    </Routes>
  </Router>
  );
}

export default App;
