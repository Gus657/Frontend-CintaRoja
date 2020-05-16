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
    title: '',
    date: '2020',
    message: '',
  }

  cambiarInput = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case 'title':
        this.setState({ title: e.target.value })
        break;

      case 'date':
        this.setState({ date: e.target.value })
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
    const URL = 'https://api-tics.herokuapp.com/error-list';
    axios.post(URL, jsonSend)
      .then(res => alert('Error Reportado!'))
      .catch(err => alert('Error al reportar Error'))
  };

  render() { 
    return ( 
      <React.Fragment>
        <h3>Reportar Errores</h3>

        <Form>
          <FormGroup>
            <Label>Titulo</Label>
            <Input
              value={this.state.title}
              onChange={this.cambiarInput}
              type="text" 
              name="title"/>
          </FormGroup>
          <FormGroup>
            <Label>Fecha</Label>
            <Input 
              value={this.state.date}
              onChange={this.cambiarInput}
              type="text"
              name="date"/>
          </FormGroup>
          <FormGroup>
            <Label>Error</Label>
            <Input 
              value={this.state.message}
              onChange={this.cambiarInput}
              type="text"
              name="message"/>
          </FormGroup>
          <Button onClick={this.manejarSubmit}>Crear Reporte</Button>
        </Form>
  
      </React.Fragment>
    );
  }
}
 
export default CreateDonation;