import React, { Component } from "react";
import { Grid, Row, Col, Table, Button,Modal } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { getEmpleados } from '../../ActionState/empleados/api/actions';


class Permisos extends Component {
 constructor(props) {
  super(props);
  this.state = {
   empleados: '',
   mostrar: false,
   empleadoModificar:{}
  };
 }

 componentWillMount() {

  this.props.getEmpleados()

 }

 habilitarModal(empleado){
  this.setState({
   mostrar: !this.state.mostrar,
   empleadoModificar: empleado
  })
 }


 render() {

  const { empleados } = this.props;
  
  return (
   <div className="content">
    <Modal
					show={this.state.mostrar}
					onHide={() => this.habilitarModal()}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title">
					<Modal.Header closeButton>
      <Modal.Title id="example-custom-modal-styling-title">
       Modificar permisos de: {this.state.empleadoModificar &&this.state.empleadoModificar.nombre} {this.state.empleadoModificar && this.state.empleadoModificar.apellido}
                        </Modal.Title>
					</Modal.Header>
					<Modal.Body>
   
					</Modal.Body>
				</Modal>
    <Grid fluid>
     <Row>
      <Col md={12}>
       <Card
        title="Empleados"
        category="User Control (Add, Edit, Remove)"
        ctTableFullWidth
        ctTableResponsive
        content={
         <div className="jumbotron">
          <div className="pull-right">
           
          </div>
          <Table striped bordered hover>
           <thead>
            <tr>
             <th>Id</th>
             <th>Nombre</th>
             <th>Apellido</th>
             <th>Lugar Trabajo</th>
             <th>Email</th>
             <th>Ocupacion</th>
             <th>Tipo</th>
            </tr>
           </thead>
           <tbody>
            {empleados.empleados.map((prop, idx) => {
             return (
              <tr key={idx}>
               <td>{idx + 1}</td>
               <td>{prop.nombre}</td>
               <td>{prop.apellido}</td>
               <td>{prop.sucursaleId.nombre}</td>
               <td>{prop.email}</td>
               <td>{prop.ocupacion}</td>
               <td>{prop.tipousuarioId.nombre}
               <Button
																	bsStyle="warning"
																	onClick={this.habilitarModal.bind(this, prop)}
																>Editar</Button> 
               </td>
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
  empleados: state.empleados,
  auth: state.auth
 }
}

export default connect(mapStateToProps, { getEmpleados })(Permisos);
