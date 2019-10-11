import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import {getEmpleados} from '../../ActionState/empleados/api/actions';

class Empleados extends Component {
    constructor(props){
        super(props);
        this.state = {
            empleados:''
                };
    }

    componentWillMount(){

        this.props.getEmpleados()
        
    }


    render() {

        const {empleados} = this.props;
        return (
            <div className="content">
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
                                            <button type="button" className="btn btn-success btn-lg"><i className="pe-7s-add-user"/> Add User</button>
                                        </div>
                                    <Table striped bordered hover>
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Tipo</th>
                                            <th>Lugar Trabajo</th>
                                            <th>Email</th>
                                            <th>Fecha nacimiento</th>
                                            <th>Estado Civil</th>
                                            <th>Nacionalidad</th>
                                            <th>Domicilio</th>
                                            <th>Ocupacion</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {empleados.empleados.map((prop, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td>{idx+1}</td>
                                                    <td>{prop.nombre}</td>
                                                    <td>{prop.apellido}</td>
                                                    <td>{prop.tipousuarioId.nombre}</td>
                                                    <td>{prop.sucursaleId.nombre}</td>
                                                    <td>{prop.email}</td>
                                                    <td>{prop.fechanacimiento}</td>
                                                    <td>{prop.estadocivil}</td>
                                                    <td>{prop.nacionalidad}</td>
                                                    <td>{prop.domicilio}</td>
                                                    <td>{prop.ocupacion}</td>
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


function mapStateToProps(state){
    return {
        empleados: state.empleados,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{ getEmpleados }) (Empleados);
