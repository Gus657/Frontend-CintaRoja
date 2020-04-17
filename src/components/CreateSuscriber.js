import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';
import axios from 'axios';

class CreateSuscriber extends Component {
  state = { 
    Nickname: '',
    pin: 0 ,
    email: '' ,
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'Nickname':
        this.setState({ Nickname: e.target.value })
        break;

      case 'pin':
        this.setState({ pin: e.target.value })
        break;

      case 'email':
        this.setState({ email: e.target.value })
        break;
    
      default:
        break;
    }
  }

  manejarSubmit = () => {
    const jsonSend = this.state;
    const URL = 'https://api-gt.herokuapp.com/api/v1/Subscribers';
    axios.post(URL, jsonSend)
      .then(res => alert('Suscripción creada'))
      .catch(err => alert(`Error al crear suscripción`)
      )};

  render() { 
    return ( 
      <React.Fragment>
        <h3>Suscripción</h3>

        <Form>
          <FormGroup>
            <Label>Nickname</Label>
            <Input
              value={this.state.Nickname}
              onChange={this.cambiarInput}
              type="text" 
              name="Nickname"/>
          </FormGroup>
          <FormGroup>
            <Label>pin</Label>
            <Input 
              value={this.state.pin}
              onChange={this.cambiarInput}
              type="number"
              name="pin"/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input 
              value={this.state.email}
              onChange={this.cambiarInput}
              type="string"
              name="email"/>
          </FormGroup>
          <Button color="success" onClick={this.manejarSubmit}>Submit</Button>
        </Form>
  
      </React.Fragment>
    );
  }
}
 
export default CreateSuscriber;