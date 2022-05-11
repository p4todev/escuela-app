import React from 'react'
import 
{ LoginContainer,
    Form,
    Img,
    CampDiv,
    Label,
    Input,
    ButtonLogin,
    P
} from './LoginElements';


const index = () => {

  //TODO: HACER LOGIN RESPONSIVE

  return (
    <>
    <LoginContainer>
        <Form>
            <Img  />
            <CampDiv>
                <Label>Correo</Label>
                <Input className="correo" id="correo"></Input>
            </CampDiv>
            <CampDiv>
                <Label>Contraseña</Label>
                <Input className="contrasena" id="contrasena"></Input>
            </CampDiv>
            <ButtonLogin to="/">ingresar</ButtonLogin>
            <P>recupera tu contraseña haciendo click aqui!</P>
        </Form>
      
    </LoginContainer>
    </>
  )
}

export default index