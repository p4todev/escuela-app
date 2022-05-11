import React from 'react'
import { 
  Ele,
  Letra,
  Tab,
  Form,
  Button,
  Input,
  Mensaje,
  Label,
  Sel,
} from './FormularioElements';

const index = () => {
  return (
  <Ele>
    <Tab>
    <Letra>Enviar Mensaje</Letra>
    </Tab>

    <Form>
    <Label for="Profesor">Profesor</Label>
    <Sel id="Profesor" name="Profesor">
    <option value="jose ramirez">Jose Ramires</option>
      <option value="felipe arias">Felipe Arias</option>
      <option value="marisa diaz">Marisa Diaz</option>
      <option value="javiera flores">Javiera Flores</option>
    </Sel>
    <Label for="Asunto">Asunto</Label>
    <Input defaultValue="" type="text"/>
    <Label for="Mensaje">Mensaje</Label>
    <Mensaje defaultValue="" type="text"/>
    </Form>

    <Button>Enviar</Button>
  
  </Ele>
  )
}
export default index