import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";


class EventsPage extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={5}>
                            <div className="jumbotron">
                                    <h1 className="display-4">PACIENTES</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <hr className="my-4" />
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla pariatur.</p>
                            </div>
                        </Col>
                        <Col md={7}>
                        <div className="jumbotron">
                                    <h2 className="display-4">RECENT</h2>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <hr className="my-4" />
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla pariatur.</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

export default EventsPage;
