import styled from 'styled-components'

export const Td =styled.td`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd
`
export const Table =styled.table`
    border-collapse: collapse;
    width: 100%;
    padding: 8px;
    text-align: left;
`
export const Label =styled.label`
`

export const Sel =styled.select`
`

export const Input = styled.input`
    background-color: white;
    padding: 0.5em;
    margin: 0.5em;
    float: left;
    color: Black;
    width: 40%;
    box-shadow: 2px 2px 5px #999;
    border: none;
    border-radius: 3px;
`
export const Mensaje = styled.input`
    background-color: white;
    padding: 5.5em;
    margin: 0.5em;
    color: Black;
    width: 40%;
    box-shadow: 2px 2px 5px #999;
    border: none;
    border-radius: 3px;
`


export const Button = styled.button`
    background-color: #3663B5;
    color: white;
    width: 14%;
    text-align: center;
    box-shadow: 2px 2px 5px #999;
    padding: 10px 0px;
    border-radius: 20px;
    margin: 0px 40px;
    border: 1px solid #3663B5;
    float: right;
    cursor: pointer;
    &:hover{
        transition: all .2s ease-in-out;
        background: white;
        color: #3663B5;
    }
`

export const Form = styled.form`
    padding: 12px;
    margin: 80px 80px;
    border: 0px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 40px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    resize: vertical;
` 

export const Ele = styled.div` 
    background : white;
    width: 60%;
    box-shadow: 2px 2px 5px #999;
    height : 320px !important;
    justify-content : center;
    align-items : center;
    margin: 0 auto;
    border-radius: 20px;
    margin-top: 60px;
    @media screen and (max-width : 960px){
        transition : 0.8s all ease;
    }
` 
export const Letra = styled.p` 
    color : #fff;
    display : flex;
    align-items : center;
    text-decoration : none;
    margin: 20px;
    padding : 0 1rem;
    height : 100%;
    &.active { 
        border-bottom : 3px solid #01fb71;
        transition : all .2s ease-in-out
    }

` 
export const Letra2 = styled.p` 
    color : Black;
    display : flex;
    align-items : center;
    text-decoration : none;
    margin: 0px 60px;
    float: left;
    margin: 20px;
    padding : 0 1rem;
    height : 100%;
    &.active { 
        border-bottom : 3px solid #01fb71;
        transition : all .2s ease-in-out
    }

` 
export const Tab = styled.div` 
    background : #3864b4;
    width: 100%;
    height : 80px !important;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content : center;
    align-items : center;
    margin: 0 auto;
    
` 