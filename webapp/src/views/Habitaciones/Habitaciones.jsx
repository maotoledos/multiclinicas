import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";

class UsersPage extends Component {
    imageStyle = {
        marginLeft: '12%'
    }

    render() {
        return (
            <div className="content">
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
                                        {tdArray.map((prop, key) => {
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

export default UsersPage;
