import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";
import { getInventario } from '../../ActionState/inventario/api/actions';


class ReportsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventarios: ''
        };
    }

    componentWillMount() {
        this.props.getInventario()
            .then(res => {
            })
    }
    render() {

        const { inventarios } = this.props
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Inventario de medicina"
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
                                                    <th>Id</th>
                                                    <th>Producto</th>
                                                    <th>Cantidad</th>
                                                    <th>Clinica</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {inventarios.inventarios.map((prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <th>{key + 1}</th>
                                                            <th>{prop.nombre}</th>
                                                            <th>{prop.cantidad}</th>
                                                            <th>{prop.sucursaleId.nombre}</th>
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

function mapStateToProps(state) {
    return {
        inventarios: state.inventarios,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getInventario })(ReportsPage);
