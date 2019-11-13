import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'

import TextFieldGroup from '../TextFieldGroup/TextFieldGroup';
import { editarInventario } from '../../ActionState/inventario/api/actions';


class FormularioInventarioEdit extends Component {
 constructor(props) {
  super(props);
  this.state = {
    bloquear: false,
    id:'',
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
  let inventario = this.props.valores;
  this.setState({
   id: inventario.id,
   nombre: inventario.nombre, 
   cantidad: inventario.cantidad, 
   lote: inventario.lote, 
   sucursaleId: inventario.sucursaleId,
   medicinaId: inventario.medicinaId 
  })
 }

 onSubmit(event) {
  event.preventDefault();

  this.props.editarInventario(this.state)
  this.setState({
   bloquear: true
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
          <div className="form-group"><button className="btn btn-primary btn-lg" >Editar</button></div>
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

FormularioInventarioEdit.propTypes = {
 auth: PropTypes.object.isRequired,
 editarInventario: PropTypes.func.isRequired,
 valores: PropTypes.object.isRequired
}

FormularioInventarioEdit.contextTypes = {
 router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
 return {
  auth: state.auth
 }
}

export default connect(mapStateToProps, { editarInventario })(FormularioInventarioEdit);