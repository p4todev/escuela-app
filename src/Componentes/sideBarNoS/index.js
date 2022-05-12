import React from 'react'
import 
{
SidebarContainer
,Icon
,CloseIcon
,SidebarWrapper,
SidebarMenu,
SidebarLinks,} 
from './SideBarNosElements'

const SideBar = ({isOpen,toggle})=> { 
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle  }>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='/' onClick={toggle}>
                        Inicio
                    </SidebarLinks>
                    <SidebarLinks to='#' onClick={toggle}>
                        Nuestra Mision
                    </SidebarLinks>
                    <SidebarLinks to='#'onClick={toggle}>
                        Docentes
                    </SidebarLinks>
                    <SidebarLinks to='#'onClick={toggle}>
                        Alumnos  
                    </SidebarLinks>
                    <SidebarLinks to='#'onClick={toggle}>
                        Contacto  
                    </SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default SideBar;