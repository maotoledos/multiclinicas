import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { thEmpleado, tdEmpleado2 } from "../../variables/Variables.jsx";
import {getEmpleados} from '../../ActionState/empleados/api/actions';

class StatsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            empleados:''
                };
    }

    componentWillMount(){

        this.props.getEmpleados()
        .then(res=>{
            console.log(this.props.auth)
        })
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
                                    <Table striped hover>
                                        <thead>
                                        <tr>
                                            {thEmpleado.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {empleados.empleados.map((prop, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td>{idx+1}</td>
                                                    <td>{prop.nombre}</td>
                                                    <td>{prop.tipo}</td>
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


function mapStateToProps(state){
    return {
        empleados: state.empleados,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{ getEmpleados }) (StatsPage);
