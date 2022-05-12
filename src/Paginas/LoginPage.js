import React,{useState} from 'react'
import Login from '../Componentes/Login'
import NavBarNoS from '../Componentes/NavBarNoS' 
import SideBar from '../Componentes/sideBarNoS'

const LoginPage = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = ()=>{
      setIsOpen(!isOpen);
  }

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBarNoS toggle={toggle}/>
    <Login/>
    </>
  
  )
}

export default LoginPage