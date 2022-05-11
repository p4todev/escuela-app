import './App.css';
import Home from './Paginas/Inicio';
import LoginPage from './Paginas/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home/>} exact/>
       <Route path="/inicio-sesion" element={<LoginPage/>} exact/>
    </Routes>
  </Router>
  );
}

export default App;
