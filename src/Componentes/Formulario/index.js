import React from 'react'
import { 
  Ele,
  Letra,
  Tab,
  Form,
  Button,
  Input,
  Mensaje,
} from './FormularioElements';

const index = () => {
  return (
  <Ele>
    <Tab>
    <Letra>Enviar Mensaje</Letra>
    </Tab>

    <Form>
    <label for="Profesor">Profesor</label>
    <select id="Profesor" name="Profesor">
      <option value="jose ramirez">Jose Ramires</option>
      <option value="felipe arias">Felipe Arias</option>
      <option value="marisa diaz">Marisa Diaz</option>
      <option value="javiera flores">Javiera Flores</option>
    </select>
    <br></br>
    <label for="Asunto">Asunto</label>
    <Input defaultValue="" type="text"/>
    <label for="Mensaje">Mensaje</label>
    <Mensaje defaultValue="" type="text"/>
    </Form>

    <Button>Enviar</Button>
  
  </Ele>
  )
}
export default index