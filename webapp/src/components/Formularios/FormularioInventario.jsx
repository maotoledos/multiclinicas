import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'

import TextFieldGroup from '../TextFieldGroup/TextFieldGroup';
import { agregarInventario } from '../../ActionState/inventario/api/actions';


class FormularioInventario extends Component {
 constructor(props) {
  super(props);
  this.state = {
   bloquear: false,
   nombre:'', 
   cantidad:'', 
   lote:'', 
   sucursaleId: '' ,
   medicinaId: '' 
  };
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
 }
 
 componentWillMount() {
 }
 onSubmit(event) {
    event.preventDefault();
  
    this.props.agregarInventario(this.state)
    this.setState({
     bloquear:true
    })
   }
  
   onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
   }


 render() {


  const { nombre, cantidad,lote,sucursaleId,medicinaId,bloquear } = this.state;
  return (
   <div className="content">
    <Grid>
     <Row>
      <Col md={6}>
       <div className="jumbotron jumbotron-fluid">
        <div className="jumbotron">
         <form onSubmit={this.onSubmit}>

          <TextFieldGroup
           field="nombre"
           label="Nombre"
           value={nombre}
           isDisabled={bloquear}
           onChange={this.onChange}
          />

          <TextFieldGroup
           field="cantidad"
           label="cantidad"
           value={cantidad}
           isDisabled={bloquear}
           onChange={this.onChange}
          />

          <TextFieldGroup
           field="lote"
           label="lote"
           value={lote}
           isDisabled={bloquear}
           onChange={this.onChange}
          />

          <TextFieldGroup
           field="sucursaleId"
           label="sucursaleId"
           value={sucursaleId}
           isDisabled={bloquear}
           onChange={this.onChange}
          />

            <TextFieldGroup
           field="medicinaId"
           label="medicinaId"
           value={medicinaId}
           isDisabled={bloquear}
           onChange={this.onChange}
          />    

        
          <div className="form-group"><button className="btn btn-primary btn-lg" >Agregar</button></div>
         </form>
        </div>
       </div>
      </Col>
     </Row>
    </Grid>
   </div>
  );
 }
}

FormularioInventario.propTypes = {
 auth: PropTypes.object.isRequired,
 agregarInventario: PropTypes.func.isRequired
}

FormularioInventario.contextTypes = {
 router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
 return {
  auth: state.auth
 }
}

export default connect(mapStateToProps, { agregarInventario })(FormularioInventario);