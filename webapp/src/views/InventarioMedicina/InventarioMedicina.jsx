import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { getInventario } from '../../ActionState/inventario/api/actions';


class InventarioMedicina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventarios: ''
        };
    }

    componentWillMount() {
        this.props.getInventario()
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
                                                    <th>Cantidad Cajas</th>
                                                    <th>Clinica</th>
                                                    <th>Lote</th>
                                                    <th>Medicina</th>
                                                    <th>Marca</th>
                                                    <th>Unidades</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {inventarios.inventarios.map((prop, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>{prop.nombre}</td>
                                                            <td>{prop.cantidad}</td>
                                                            <td>{prop.sucursaleId.nombre}</td>
                                                            <td>{prop.lote}</td>
                                                            <td>{prop.medicinaId.nombre}</td>
                                                            <td>{prop.medicinaId.marca}</td>
                                                            <td>{prop.medicinaId.unidades}</td>
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

export default connect(mapStateToProps, { getInventario })(InventarioMedicina);
