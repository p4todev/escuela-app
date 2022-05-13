import React,{useState} from 'react'
import NavBarNoS from '../Componentes/NavBarNoS' 
import SideBar from '../Componentes/sideBarNoS';
import InfoColegio from '../Componentes/InfoColegio'

const Inicio = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  return (
  
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBarNoS toggle={toggle} />
      <InfoColegio />
    </>
    
  )
}

export default Inicio