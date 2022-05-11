import React from 'react'
import 
{ LoginContainer,
    Form,
    Img,
    CampDiv,
    Label,
    Input,
    ButtonLogin
} from './LoginElements';




const index = () => {
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
        </Form>
    </LoginContainer>
    </>
  )
}

export default index