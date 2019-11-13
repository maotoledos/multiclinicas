import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'

import TextFieldGroup from '../TextFieldGroup/TextFieldGroup';
import { agregarHabitacion } from '../../ActionState/estadohabitaciones/api/actions';


class FormularioHabitacionEdit extends Component {
 constructor(props) {
  super(props);
  this.state = {
   bloquear: false,
   id: '',
   fechaocupada:'',
   fechadesocupada:'', 
   sucursaleId:'',
   pacienteId:'',
   habitacionId:''
  };
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);

 }

 componentWillMount() {
     let habitacion = this.props.valores;
     this.setState({
        id: habitacion.id,
        fechaocupada: habitacion.nombre,
        fechadesocupada: habitacion.apellido,
        sucursaleId: habitacion.email,
        pacienteId: habitacion.fechanacimiento,
        habitacion: habitacion.estadocivil,
     })
 }

 onSubmit(event) {
  event.preventDefault();

  this.props.agregarHabitacion(this.state)
  this.setState({
   bloquear:true
  })
 }

 onChange(event) {
  this.setState({ [event.target.name]: event.target.value })
 }

 render() {


  const {fechaocupada,fechadesocupada,sucursaleId,pacienteId,habitacionId,bloquear } = this.state;
  return (
   <div className="content">
    <Grid>
     <Row>
      <Col md={6}>
       <div className="jumbotron jumbotron-fluid">
        <div className="jumbotron">
         <form onSubmit={this.onSubmit}>

          <TextFieldGroup
           field="fechaocupada"
           label="fechaocupada"
           value={fechaocupada}
           isDisabled={bloquear}
           onChange={this.onChange}
          />

          <TextFieldGroup
           field="fechadesocupada"
           label="fechadesocupada"
           value={fechadesocupada}
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
           field="pacienteId"
           label="pacienteId"
           value={pacienteId}
           isDisabled={bloquear}
           onChange={this.onChange}
          />
          <TextFieldGroup
           field="habitacionId"
           label="habitacionId"
           value={habitacionId}
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

FormularioHabitacionEdit.propTypes = {
 auth: PropTypes.object.isRequired,
 editarHabitacion: PropTypes.func.isRequired,
 valores: PropTypes.object.isRequired
}

FormularioHabitacionEdit.contextTypes = {
 router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
 return {
  auth: state.auth
 }
}

export default connect(mapStateToProps, { agregarHabitacion })(FormularioHabitacionEdit);