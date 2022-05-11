import './App.css';
import Home from './Paginas/Inicio';
<<<<<<< HEAD
import Formulario from './Paginas/Formulario';
=======
import LoginPage from './Paginas/LoginPage';
>>>>>>> 851e46b03d41e5ccd7dac862d7ec689bf4dbce88
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home/>} exact/>
<<<<<<< HEAD
       <Route path="formulario" element={<Formulario/>} exact/>
=======
       <Route path="/inicio-sesion" element={<LoginPage/>} exact/>
>>>>>>> 851e46b03d41e5ccd7dac862d7ec689bf4dbce88
    </Routes>
  </Router>
  );
}

export default App;
