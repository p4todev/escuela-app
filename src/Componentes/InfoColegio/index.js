import React from 'react'
import { ColegioInfoContainer,Img} from './InfoColegioElements'
import college from '../../Imagenes/college.jpg'

const index = () => {
  return (
    <>
    <ColegioInfoContainer>
        <Img src={college}/>
    </ColegioInfoContainer>
    </>
  )
}

export default index