import React, { Component } from 'react';
import axios from 'axios';
import Suscriber from './Donation';

class Donations extends Component {
  state = {
    titulo: "Donaciones Registradas!",
    suscribers: [],
  };

  /*
  suscriber: String,   - nombre  - puede ser tambien nickname 
      amount: Number, --- exisencias - pin
    message: String, --- precio - email
  */

  // El componente se montó
  componentDidMount() {
    const URL = 'https://api-gt.herokuapp.com/api/v1/Donations';
    
    axios.get(URL)
      .then(response => {
        const suscribers = response.data;
        this.setState({ suscribers });
      })
      .catch(err => console.log(err));
  }

  renderizarSuscriber() {
    const { suscribers } = this.state;
    let amount = 0
    if (suscribers.length === 0) {
      return <span>Cargando suscriptores...</span>
    } else if (suscribers.length > 0) {
      // ¿Cómo itero y muestro cada elemento de mi arreglo de artículos?
      return (
        <React.Fragment>


          <span>Estas son las donaciones que tenemos registradas: {suscribers.length} Donadores</span>
          { suscribers.map(nickname => {
            amount+= nickname.amount
            return (
              <Suscriber 
                message={nickname.message}
                amount={nickname.amount}
                suscriber={nickname.suscriber} />
              
            )
            
          })}
          <h3>{`El total de donaciones es ${amount}. Gracias por tu ayuda!`}</h3>
        </React.Fragment>
      )
    }
  }
  
  render() { 
    return (
      <React.Fragment>
        <h3>{ this.state.titulo }</h3>
        { this.renderizarSuscriber() }
      </React.Fragment>
    );
  }
}
 
export default Donations;