import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav` 
    background : #3663B5;
    height : 70px;
    display: flex;
    justify-content : center;
    align-items : center;
    font-size : .9rem;
    position : sticky;
    top : 0;
    z-index : 10;
    @media screen and (max-width : 960px){
        transition : 0.8s all ease;
    }
` 

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width : 768px){
        display: block;
        position : absolute;
        top : 0;
        right : 0;
        transform : translate(-100%, 60%);
        font-size : 1.7rem;
        cursor : pointer;
        color : #fff;
    }
`

export const NavBarContainer = styled.div` 
    display : flex;
    justify-content : space-between;
    height : 70px;
    z-index : 1;    
    width : 100%;
    padding : 0 24px;
    max-width : 1100px;
`   

export const NavMenu = styled.ul`
    display : flex;
    align-items : center;
    list-style : none;
    text-align : center;
    margin-right : -22px;
    @media screen and (max-width : 768px){
        display : none;
    }
`

export const NavItem = styled.li`
    height : 80px;
`

export const NavLinks = styled.a` 
    color : #fff;
    display : flex;
    align-items : center;
    text-decoration : none;
    padding : 0 1rem;
    height : 100%;
    cursor : pointer;
    &.active { 
        border-bottom : 3px solid #01fb71;
        transition : all .2s ease-in-out
    }
`

export const NavBarLogo = styled(LinkR)`
    color : #fff;
    justify-self : flex-start;
    cursor : pointer;
    display :flex;
    align-items : center;
    margin-left : 24px;
    font-weight : bold;
    text-decoration : none;
    font-size: 1.3rem;
`