import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { getPacientes } from '../../ActionState/pacientes/api/actions';


class Pacientes extends Component {
    constructor(props){
        super(props);
        this.state = {
            paciente:''
                };
    }

    componentWillMount(){
        this.props.getPacientes()
    }

    render() {
        
        const {pacientes} = this.props

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Pacientes"
                                category="User Control (Add, Edit, Remove)"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <div className="jumbotron">
                                        <div className="pull-right">
                                            <button type="button" className="btn btn-success btn-lg"><i className="pe-7s-add-user"/> Add User</button>
                                        </div>
                                    <Table striped hover>
                                        <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
                                            <th>Fecha nacimiento</th>
                                            <th>Estado Civil</th>
                                            <th>Nacionalidad</th>
                                            <th>Domicilio</th>
                                            <th>Ocupacion</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {pacientes.pacientes.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{key+1}</td>
                                                    <td>{prop.nombre}</td>
                                                    <td>{prop.apellido}</td>
                                                    <td>{prop.email}</td>
                                                    <td>{(new Date(prop.fechanacimiento)).toString()}</td>
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
        pacientes: state.pacientes,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{getPacientes})(Pacientes);
