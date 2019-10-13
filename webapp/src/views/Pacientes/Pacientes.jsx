import React, { Component } from "react";
import { Grid, Row, Col, Table, Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import { getPacientes, eliminarPaciente } from '../../ActionState/pacientes/api/actions';
import PacienteForm from '../../components/Formularios/FormularioPaciente';
import PacienteFormEditar from '../../components/Formularios/FormularioPacienteEdit';



class Pacientes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paciente: '',
			mostrarModal: false,
			mostrarModalEdit: false,
			valoresPaciente: {}
		};
	}

	eliminarPaciente = async (idPaciente) => {
		await this.props.eliminarPaciente(idPaciente)
		this.props.getPacientes();
	}

	habilitarModal = () => {
		this.setState({
			mostrarModal: !this.state.mostrarModal
		});
		this.state.mostrarModal && this.props.getPacientes();
	}

	habilitarModalEditar = (valoresPaciente) => {
		this.setState({
			valoresPaciente: valoresPaciente,
			mostrarModalEdit: !this.state.mostrarModalEdit
		});
		this.state.mostrarModalEdit && this.props.getPacientes();
	}

	componentWillMount() {
		this.props.getPacientes()
	}

	render() {

		const { pacientes } = this.props;

		return (
			<div className="content">
				<Modal
					show={this.state.mostrarModal}
					onHide={() => this.habilitarModal()}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title">
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title">
							Agregar Paciente
                        </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<PacienteForm />
					</Modal.Body>
				</Modal>

				<Modal
					show={this.state.mostrarModalEdit}
					onHide={() => this.habilitarModalEditar()}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title">
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title">
							Editar Paciente
      </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.state.mostrarModalEdit &&
							<PacienteFormEditar valores={this.state.valoresPaciente} />}
					</Modal.Body>
				</Modal>
				<Grid fluid>
					<Row>
						<Col md={12}>
							<Card
								title="Pacientes"
								category="Nuestros clientes son nuestra familia."
								ctTableFullWidth
								ctTableResponsive
								content={
									<div className="jumbotron">
										<div className="pull-right">
											<button type="button" className="btn btn-success btn-lg" onClick={this.habilitarModal}><i className="pe-7s-add-user" /> Add User</button>
										</div>
										<Table responsive>
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
															<td>{key + 1}</td>
															<td>{prop.nombre}</td>
															<td>{prop.apellido}</td>
															<td>{prop.email}</td>
															<td>{prop.fechanacimiento}</td>
															<td>{prop.estadocivil}</td>
															<td>{prop.nacionalidad}</td>
															<td>{prop.domicilio}</td>
															<td>{prop.ocupacion}</td>
															<td>
																<Button
																	bsStyle="primary"
																	onClick={this.habilitarModalEditar.bind(this, prop)}
																>
																	Editar
																			</Button>
																<Button
																	bsStyle="danger"
																	onClick={this.eliminarPaciente.bind(this, prop.id)}
																>
																	X
																</Button>
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
		pacientes: state.pacientes,
		auth: state.auth
	}
}

export default connect(mapStateToProps, { getPacientes, eliminarPaciente })(Pacientes);
