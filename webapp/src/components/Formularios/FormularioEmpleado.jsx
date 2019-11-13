import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'

import TextFieldGroup from '../TextFieldGroup/TextFieldGroup';
import { agregarEmpleado } from '../../ActionState/empleados/api/actions';


class FormularioEmpleado extends Component {
 constructor(props) {
  super(props);
  this.state = {
   bloquear: false,
nombre: '', 
apellido:'',
email:'',
password:'', 
first_users:'', 
fechanacimiento:'',
estadocivil :'',
nacionalidad:'',
domicilio:'',
ocupacion:'',
sucursaleId:'',
tipousuarioId:''
  };
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);

 }

 componentWillMount() {
 }

 onSubmit(event) {
  event.preventDefault();

  this.props.agregarEmpleado(this.state)
  this.setState({
   bloquear:true
  })
 }

 onChange(event) {
  this.setState({ [event.target.name]: event.target.value })
 }

 render() {


  const {nombre,apellido,email,password,first_users,fechanacimiento,estadocivil,nacionalidad,domicilio,ocupacion,sucursaleId,tipousuarioId,bloquear } = this.state;
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
            field="password"
            label="password"
            value={password}
            isDisabled={bloquear}
            onChange={this.onChange}
            />
                <TextFieldGroup
            field="first_users"
            label="first_users"
            value={first_users}
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
              <TextFieldGroup
            field="sucursaleId"
            label="sucursalIed"
            value={sucursaleId}
            isDisabled={bloquear}
            onChange={this.onChange}
            />
                <TextFieldGroup
            field="tipousuarioId"
            label="tipousuarioId"
            value={tipousuarioId}
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

FormularioEmpleado.propTypes = {
 auth: PropTypes.object.isRequired,
 agregarEmpleado: PropTypes.func.isRequired
}

FormularioEmpleado.contextTypes = {
 router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
 return {
  auth: state.auth
 }
}

export default connect(mapStateToProps, { agregarEmpleado })(FormularioEmpleado);