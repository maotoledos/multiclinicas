import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import { thEmpleado, tdEmpleado2 } from "../../variables/Variables.jsx";
class StatsPage extends Component {
    
    render() {
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
                                        {tdEmpleado2.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    {prop.map((prop, key) => {
                                                        return <td key={key}>{prop}</td>;
                                                    })}
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

export default StatsPage;
