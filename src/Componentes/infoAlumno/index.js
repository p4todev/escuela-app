import React from 'react'
import { AlumnosContainer,
InformacionTitulo,
Titulo,Info1,Info2,P,InfoContainer} from './infoAlumnoElements'


const index = () => {
  return (
    <>
    <AlumnosContainer>
        <InformacionTitulo>
            <Titulo>Informacion Alumno</Titulo>
        </InformacionTitulo>
        <InfoContainer>
        <Info1>
            <P>Nombre : </P>
            <P>Apellido : </P>
            <P>Correo</P>
        </Info1>
        <Info2>
            <P>Profesor : </P>
            <P>Apoderado : </P>
        </Info2>
        </InfoContainer>
    </AlumnosContainer>
    </>
  )
}

export default index