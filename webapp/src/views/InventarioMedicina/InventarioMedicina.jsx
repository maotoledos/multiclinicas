import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class ReportsPage extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={6}>
                            <div className="jumbotron jumbotron-fluid">
                                <div className="jumbotron">
                                    <h1 className="display-4">INVENTARIO MEDICINA</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <hr className="my-4" />
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                                <div className="jumbotron">
                                    <button type="button" className="btn btn-secondary btn-lg btn-block">Watch Reports</button>
                                    <hr/>
                                    <button type="button" className="btn btn-secondary btn-lg btn-block">Over Time Report</button>
                                    <hr/>
                                    <button type="button" className="btn btn-secondary btn-lg btn-block">Time off Report</button>
                                    <hr/>
                                    <button type="button" className="btn btn-secondary btn-lg btn-block">Plus / Minus</button>
                                    <hr/>
                                    <button type="button" className="btn btn-secondary btn-lg btn-block">Shift Differential</button>
                                    <hr/>
                                    <button type="button" className="btn btn-secondary btn-lg btn-block">Coverage / Min Shift</button>
                                </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

export default ReportsPage;
