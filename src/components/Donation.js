import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Donation extends Component {
  state = { 
    title: this.props.title, // nombre
    date: this.props.date, // existencias
    message: this.props.message, // precio
  }


  render() { 
    return ( 
      <Card className="mt-3" style={{ backgroundColor: '#32CD32' }}>
        <CardBody>
          <CardTitle style={{ color: 'white' }}>{ this.state.title }</CardTitle>
          <CardText style={{ color: 'white' }}>
            {`Donación: ${this.state.date} - Mensaje: ${this.state.message}`}
          </CardText>
        </CardBody>
      </Card>
     );
  }
}
 
export default Donation;