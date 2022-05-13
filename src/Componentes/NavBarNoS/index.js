import React from 'react'
import { 
  Nav,
  NavBarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavBarLogo,
  MobileIcon
} from './NavBarNoSElements';
import {FaBars} from 'react-icons/fa';


const index = ({toggle}) => {

  return (
  <Nav>
    <NavBarContainer>
    <NavBarLogo to='/' >EscuelaAPP</NavBarLogo>
    <MobileIcon onClick={toggle} >
        <FaBars/>
    </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks>Inicio</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks>Nuestra Mision</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks>Docentes</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks >Alumnos</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks>Contacto</NavLinks>
        </NavItem>
      </NavMenu>
    </NavBarContainer>
  </Nav>
  )
}

export default index