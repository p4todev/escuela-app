import React from 'react'
import { 
  Nav,
  NavBarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavBarLogo
} from '../NavBarNoS/NavBarNoSElements';


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
        <NavLinks>Informaciones</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks>Asistencias</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks>Notas</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks>Mensajes</NavLinks>
        </NavItem>
      </NavMenu>
    </NavBarContainer>
  </Nav>
  )
}

export default index