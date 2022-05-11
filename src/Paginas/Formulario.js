import React,{useState}from 'react'
import Formulario from '../Componentes/Formulario' 
import NavbarLogin from '../Componentes/NavbarLogin'


const Inicio = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = ()=>{
      setIsOpen(!isOpen);
  }

  return (
    <>
        <NavbarLogin toggle={toggle}/>
        <Formulario />
    </>
    
  )
}
export default Inicio