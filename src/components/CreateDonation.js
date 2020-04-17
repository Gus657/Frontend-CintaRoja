import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';
import axios from 'axios';

class CreateDonation extends Component {
  state = { 
    suscriber: '',
    amount: 0,
    message: '',
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'nombre':
        this.setState({ suscriber: e.target.value })
        break;

      case 'monto':
        this.setState({ amount: e.target.value })
        break;

      case 'message':
        this.setState({ message: e.target.value })
        break;
    
      default:
        break;
    }
  }

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'https://api-gt.herokuapp.com/api/v1/Donations';
    axios.post(URL, jsonSend)
      .then(res => alert('Donacion Creada!'))
      .catch(err => alert('Error al Crear DOnacion'))
  };

  render() { 
    return ( 
      <React.Fragment>
        <h3>Crear Donación</h3>

        <Form>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              value={this.state.suscriber}
              onChange={this.cambiarInput}
              type="text" 
              name="nombre"/>
          </FormGroup>
          <FormGroup>
            <Label>Monto</Label>
            <Input 
              value={this.state.amount}
              onChange={this.cambiarInput}
              type="number"
              name="monto"/>
          </FormGroup>
          <FormGroup>
            <Label>Mensaje</Label>
            <Input 
              value={this.state.message}
              onChange={this.cambiarInput}
              type="text"
              name="message"/>
          </FormGroup>
          <Button onClick={this.manejarSubmit}>Crear</Button>
        </Form>
  
      </React.Fragment>
    );
  }
}
 
export default CreateDonation;