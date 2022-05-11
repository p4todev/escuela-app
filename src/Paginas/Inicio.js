import React,{useState} from 'react'
import NavBarNoS from '../Componentes/NavBarNoS' 
import SideBar from '../Componentes/sideBarNoS';


const Inicio = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  return (
  
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBarNoS toggle={toggle} />
    </>
    
  )
}

export default Inicio