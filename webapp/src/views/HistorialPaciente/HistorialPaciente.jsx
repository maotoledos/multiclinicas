import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import { connect } from 'react-redux';
import { getHistorialPaciente } from '../../ActionState/historialpaciente/api/actions';

class HistorialPaciente extends Component {
 constructor(props) {
  super(props);
  this.state = {
   historial: []
  };
 }


 componentWillMount() {
  this.props.getHistorialPaciente()
 }


 render() {

  const {historial}=this.props;
  return (
   <div className="content">
    <Grid fluid>
     <Row>
      <Col md={12}>
       <Card
        title="Historial de pacientes"
        category="User Control (Add, Edit, Remove)"
        ctTableFullWidth
        ctTableResponsive
        content={
         <div className="jumbotron">
          <div className="pull-right">
           <button type="button" className="btn btn-success btn-lg"><i className="pe-7s-add-user" /> Add User</button>
          </div>
          <Table striped hover>
           <thead>
            <tr>
             <th>No.</th>
             <th>Historial</th>
             <th>Examen</th>
             <th>Diagnostico</th>
             <th>Fecha</th>
             <th>Observaciones</th>
             <th>Tipo Atencion</th>
             <th>Expediente</th>
             <th>Paciente</th>
             <th>Atendido por</th>
            </tr>
           </thead>
           <tbody>
            {historial.historial.map((prop, key) => {
             return (
              <tr key={key}>
               <td>{key + 1}</td>
               <td>{prop.nombre}</td>
               <td>{prop.examenes}</td>
               <td>{prop.diagnostico}</td>
               <td>{prop.fecha}</td>
               <td>{prop.observacion}</td>
               <td>{prop.tipoatencionId.nombre}</td>
               <td>{prop.expedienteId.descripcion}</td>
               <td>{prop.pacienteId.nombre} {prop.pacienteId.apellido}</td>
               <td>
                {prop.userId.tipousuarioId.nombre}
                {prop.userId.nombre}
                {prop.userId.apellido}</td>
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
  historial: state.historial,
  auth: state.auth
 }
}

export default connect(mapStateToProps, { getHistorialPaciente })(HistorialPaciente);
