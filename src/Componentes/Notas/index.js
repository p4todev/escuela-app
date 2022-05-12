import React from 'react'
import { 
  Ele,
  Letra,
  Tab,
  Form,
  Table,
  Td,
} from './NotasElements';

const index = () => {
  return (
  <Ele>
    <Tab>
    <Letra>Notas Alumno</Letra>
    </Tab>
    <Form>
    <Table>
      <tr>
        <th>Ramo</th>
        <th>Nota1</th> 
        <th>Nota2</th>
        <th>Nota3</th>
        <th>Promedio</th>
      </tr>
      <tr>
        <Td>Historia</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
      </tr>
      <tr>
        <Td>Matematica</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
      </tr>
      <tr>
        <Td>Lenguaje</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
      </tr>
      <tr>
        <Td>Ingles</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
        <Td>6.0</Td>
      </tr>
    </Table>
    </Form>
  </Ele>
  )
}
export default index