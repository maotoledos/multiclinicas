import React, { Component } from "react";
import { Grid, Row, Col, Table,Modal } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { connect } from 'react-redux';
import { getPacientesXHabitaciones } from '../../ActionState/estadohabitaciones/api/actions';
import HabitacionForm from '../../components/Formularios/FormularioHabitacion';
import HabitacionFormEditar from '../../components/Formularios/FormularioHabitacionEdit';

class Habitaciones extends Component {
 constructor(props) {
  super(props);
  this.state = {
   pacientesxhabitaciones: [],
   mostrarModal: false,
   mostrarModalEdit: false,
   valoresHabitacion: {}
  };
 }
 eliminarHabitacion = async (idHabitacion) => {
    await this.props.eliminarHabitacion(idHabitacion)
    this.props.getPacientesXHabitaciones();
}

habilitarModal = () => {
    this.setState({
        mostrarModal: !this.state.mostrarModal
    });
    this.state.mostrarModal && this.props.getPacientesXHabitaciones();
}

habilitarModalEditar = (valoresHabitacion) => {
    this.setState({
        valoresHabitacion: valoresHabitacion,
        mostrarModalEdit: !this.state.mostrarModalEdit
    });
    this.state.mostrarModalEdit && this.props.getPacientesXHabitaciones();
}


 componentWillMount() {
  this.props.getPacientesXHabitaciones();
 }



 imageStyle = {
  marginLeft: '12%'
 }

 render() {
  const { pacientesxhabitaciones } = this.props;
  return (
    <div className="content">
    <Modal
        show={this.state.mostrarModal}
        onHide={() => this.habilitarModal()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Agregar Habitacion
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <HabitacionForm />
        </Modal.Body>
    </Modal>

    <Modal
        show={this.state.mostrarModalEdit}
        onHide={() => this.habilitarModalEditar()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Editar Habitacion
</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {this.state.mostrarModalEdit &&
                <HabitacionFormEditar valores={this.state.valoresHabitacion} />}
        </Modal.Body>
    </Modal>
    <Grid fluid>
        <Row>
            <Col md={12}>
                <Card
        title="Habitaciones"
        category="User Control (Add, Edit, Remove)"
        ctTableFullWidth
        ctTableResponsive
        content={
         <div className="jumbotron">
          <div className="pull-right">
           <button type="button" className="btn btn-success btn-lg"onClick={this.habilitarModal}><i className="pe-7s-add-user" /> Add User</button>
          </div>
          <Table striped hover>
           <thead>
            <tr>
             <th>No.</th>
             <th>Fecha Ocupada</th>
             <th>Fecha Desocupada</th>
             <th>Nombre Paciente</th>
             <th>Fecha nacimiento</th>
             <th>Estado Civil</th>
             <th>Nacionalidad</th>
             <th>Domicilio</th>
             <th>Ocupacion</th>
             <th>Habitacion</th>
             <th>Clinica</th>
            </tr>
           </thead>
           <tbody>
            {pacientesxhabitaciones.pacientesxhabitaciones.map((prop, key) => {
             return (
              <tr key={key}>
               <td>{key + 1}</td>
               <td>{prop.fechaocupada}</td>
               <td>{prop.fechadesocupada}</td>
               <td>{prop.pacienteId.nombre}</td>
               <td>{prop.pacienteId.fechanacimiento}</td>
               <td>{prop.pacienteId.estadocivil}</td>
               <td>{prop.pacienteId.nacionalidad}</td>
               <td>{prop.pacienteId.domicilio}</td>
               <td>{prop.pacienteId.ocupacion}</td>
               <td>{prop.habitacionId.nombre}</td>
               <td>{prop.sucursaleId.nombre}</td>
              </tr>
             );
            })}
           </tbody>
          </Table>
         </div>
        }
       />
      </Col>
     </Row>
    </Grid>
   </div>

  );
 }
}

function mapStateToProps(state) {
 return {
  pacientesxhabitaciones: state.pacientesxhabitaciones,
  auth: state.auth
 }
}

export default connect(mapStateToProps, { getPacientesXHabitaciones })(Habitaciones);