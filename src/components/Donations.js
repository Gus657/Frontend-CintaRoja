import React, { Component } from 'react';
import axios from 'axios';
import Suscriber from './Donation';

class Donations extends Component {
  state = {
    titulo: "Errores Reportados",
    suscribers: [],
  };

  /*
  suscriber: String,   - nombre  - puede ser tambien nickname 
      amount: Number, --- exisencias - pin
    message: String, --- precio - email
  */

  // El componente se montó
  componentDidMount() {
    const URL = 'https://api-tics.herokuapp.com/error-list';
    
    axios.get(URL)
      .then(response => {
        const suscribers = response.data;
        this.setState({ suscribers });
      })
      .catch(err => console.log(err));
  }

  renderizarSuscriber() {
    const { suscribers } = this.state;
    if (suscribers.length === 0) {
      return <span>Cargando Errores...</span>
    } else if (suscribers.length > 0) {
      // ¿Cómo itero y muestro cada elemento de mi arreglo de artículos?
      return (
        <React.Fragment>


          <span>Estos son los errores Reportados a la Fecha: {suscribers.length} Errores</span>
          { suscribers.map(nickname => {
            return (
              <Suscriber 
                message={nickname.message}
                date={nickname.date}
                title={nickname.title} />
              
            )
            
          })}
    
        </React.Fragment>
      )
    }
  }
  
  render() { 
    return (
      <React.Fragment>
        <h3>{ this.state.titulo }</h3>
        { this.renderizarSuscriber() }
    {this.props.data.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}
      </React.Fragment>
    );
  }
}
 
export default Donations;
