import React, { Component } from "react";
import { Grid, Row, Col, Table,Modal } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { getInventarios, eliminarInventario } from '../../ActionState/inventario/api/actions';
import InventarioForm from '../../components/Formularios/FormularioInventario';
import InventarioFormEditar from '../../components/Formularios/FormularioInventarioEdit';

class InventarioMedicina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventarios: '',
            mostrarModal: false,
			mostrarModalEdit: false,
			valoresInventario: {}
        };
    }
	eliminarInventario = async (idInventario) => {
		await this.props.eliminarInventario(idInventario)
		this.props.getInventarios();
	}

	habilitarModal = () => {
		this.setState({
			mostrarModal: !this.state.mostrarModal
		});
		this.state.mostrarModal && this.props.getInventarios();
	}

	habilitarModalEditar = (valoresInventario) => {
		this.setState({
			valoresInventario: valoresInventario,
			mostrarModalEdit: !this.state.mostrarModalEdit
		});
		this.state.mostrarModalEdit && this.props.getInventarios();
	}
    componentWillMount() {
        this.props.getInventarios()
    }
    render() {

        const { inventarios } = this.props
        return (
            <div className="content">
            <Modal
                show={this.state.mostrarModal}
                onHide={() => this.habilitarModal()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Agregar Inventario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InventarioForm />
                </Modal.Body>
            </Modal>

            <Modal
                show={this.state.mostrarModalEdit}
                onHide={() => this.habilitarModalEditar()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Editar Inventario
  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.mostrarModalEdit &&
                        <InventarioFormEditar valores={this.state.valoresInventario} />}
                </Modal.Body>
            </Modal>
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
                                            <button type="button" className="btn btn-success btn-lg"
                                            onClick={this.habilitarModal}><i className="pe-7s-add-user" /> Add User</button>
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

export default connect(mapStateToProps, { getInventarios,eliminarInventario })(InventarioMedicina);
