import './App.css';
import Home from './Paginas/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home/>} exact/>
    </Routes>
  </Router>
  );
}

export default App;
