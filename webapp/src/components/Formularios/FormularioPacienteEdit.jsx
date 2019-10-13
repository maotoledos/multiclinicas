import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'

import TextFieldGroup from '../TextFieldGroup/TextFieldGroup';
import { editarPaciente } from '../../ActionState/pacientes/api/actions';


class FormularioPacienteEdit extends Component {
 constructor(props) {
  super(props);
  this.state = {
   bloquear: false, id: '',
   nombre: '', apellido: '', email: '',
   fechanacimiento: '', estadocivil: '',
   nacionalidad: '', domicilio: '', ocupacion: ''
  };
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);

 }

 componentWillMount() {
  let paciente = this.props.valores;
  this.setState({
   id: paciente.id,
   nombre: paciente.nombre,
   apellido: paciente.apellido,
   email: paciente.email,
   fechanacimiento: paciente.fechanacimiento,
   estadocivil: paciente.estadocivil,
   nacionalidad: paciente.nacionalidad,
   domicilio: paciente.domicilio,
   ocupacion: paciente.ocupacion
  })
 }

 onSubmit(event) {
  event.preventDefault();

  this.props.editarPaciente(this.state)
  this.setState({
   bloquear: true
  })
 }

 onChange(event) {
  this.setState({ [event.target.name]: event.target.value })
 }

 render() {


  const { nombre, apellido, email, fechanacimiento, estadocivil,
   nacionalidad, domicilio, ocupacion, bloquear } = this.state;
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
           field="apellido"
           label="apellido"
           value={apellido}
           isDisabled={bloquear}
           onChange={this.onChange}
          />

          <TextFieldGroup
           field="email"
           label="email"
           value={email}
           isDisabled={bloquear}
           onChange={this.onChange}
          />

          <TextFieldGroup
           field="fechanacimiento"
           label="fechanacimiento"
           value={fechanacimiento}
           isDisabled={bloquear}
           type="Date"
           onChange={this.onChange}
          />

          <TextFieldGroup
           field="estadocivil"
           label="estadocivil"
           value={estadocivil}
           isDisabled={bloquear}
           onChange={this.onChange}
          />
          <TextFieldGroup
           field="nacionalidad"
           label="nacionalidad"
           value={nacionalidad}
           isDisabled={bloquear}
           onChange={this.onChange}
          />
          <TextFieldGroup
           field="domicilio"
           label="domicilio"
           value={domicilio}
           isDisabled={bloquear}
           onChange={this.onChange}
          />
          <TextFieldGroup
           field="ocupacion"
           label="ocupacion"
           value={ocupacion}
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

FormularioPacienteEdit.propTypes = {
 auth: PropTypes.object.isRequired,
 editarPaciente: PropTypes.func.isRequired,
 valores: PropTypes.object.isRequired
}

FormularioPacienteEdit.contextTypes = {
 router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
 return {
  auth: state.auth
 }
}

export default connect(mapStateToProps, { editarPaciente })(FormularioPacienteEdit);