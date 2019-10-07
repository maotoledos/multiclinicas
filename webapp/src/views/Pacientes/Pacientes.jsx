import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";
import { getPacientes } from '../../ActionState/pacientes/api/actions';


class EventsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            paciente:''
                };
    }

    componentWillMount(){
        this.props.getPacientes()
        .then(response => {
            
        })
    }

    render() {
        
        const {paciente} = this.props

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
                                            {thArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {paciente.paciente.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    <th>{key+1}</th>
                                                    <th>{prop.nombre}</th>
                                                    <div className="pull-right">
                                                        <button type="button" className="btn btn-primary btn-sm">Edit</button>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <button type="button" className="btn btn-danger btn-sm">Remove</button>
                                                    </div>
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
        paciente: state.paciente,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{getPacientes})(EventsPage);
