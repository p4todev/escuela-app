import React from 'react'
import { 
  Nav,
  NavBarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavBarLogo
} from './NavBarNoSElements';


const index = () => {
  return (
  <Nav>
    <NavBarContainer>
    <NavBarLogo to='/'>EscuelaAPP</NavBarLogo>
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
        <NavLinks>Alumnos</NavLinks>
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