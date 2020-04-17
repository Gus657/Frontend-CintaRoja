import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Donation extends Component {
  state = { 
    suscriber: this.props.suscriber, // nombre
    amount: this.props.amount, // existencias
    message: this.props.message, // precio
  }
/* usar este: 
  suscriber: String,
    amount: Number,
    message: String,
    */

  render() { 
    return ( 
      <Card className="mt-3" style={{ backgroundColor: '#32CD32' }}>
        <CardBody>
          <CardTitle style={{ color: 'white' }}>{ this.state.suscriber }</CardTitle>
          <CardText style={{ color: 'white' }}>
            {`Donación: ${this.state.amount} - Mensaje: ${this.state.message}`}
          </CardText>
        </CardBody>
      </Card>
     );
  }
}
 
export default Donation;