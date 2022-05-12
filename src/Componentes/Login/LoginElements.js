import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LoginContainer = styled.div`
    height : 80vh;
    margin : 0 auto;
    width : 60%;
    margin-top : 3%;
    border-radius : 30px;
    border : 1px solid #ededed;
    -webkit-box-shadow: -7px 6px 13px 0px rgba(235,235,235,1);
    -moz-box-shadow: -7px 6px 13px 0px rgba(235,235,235,1);
    box-shadow: -7px 6px 13px 0px rgba(235,235,235,1);

`
export const Form = styled.div`
    height : 80vh;
    width : 60%;
    margin: 15% auto;


`

export const Img = styled.img`
    

`


export const CampDiv = styled.div`
    display : flex;
    flex-direction : column;
    margin : 0 auto;
`

export const Label = styled.label`
    font-size : 20px;

`

export const Input = styled.input`
    margin : 15px 0;
    padding : 11px 13px;
    border-radius : 40px;
    border : 1px solid #C2C2C2;

`

export const ButtonLogin = styled(Link)`
border-radius : 50px; 
background : #3663B5;
padding : 11px 13px;
color : #fff;
font-size : 17px;
margin : 15px 0;
outline : none;
border : 1px solid #3663B5;
cursor : pointer;
transition : all .2s ease-in-out;
text-decoration : none;
display :block;
text-align : center;
&:hover {    
    transition : all .2s ease-in-out;
    background : white;
    color :#3663B5 ;
}

`

export const P = styled.p`
    color : #3663B5;
    cursor : pointer;
    margin : 30px auto;
    text-align : center;
`



