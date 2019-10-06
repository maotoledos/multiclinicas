import React, { Component } from "react";
import { Grid, Row, Col, Carousel } from "react-bootstrap";

import image2 from '../../assets/img/stats2.png';

class StatsPage extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={5}>
                            <div className="jumbotron jumbotron-fluid">
                                <div className="jumbotron">
                                    <h1 className="display-4">STATS</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <hr className="my-4" />
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                        eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="jumbotron jumbotron-fluid">
                            <Carousel>
                                <Carousel.Item>
                                    <img width={900} height={500} alt="900x500" src={image2} />
                                    <Carousel.Caption>
                                        <h3>Stats #1</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={900} height={500} alt="900x500" src={image2} />
                                    <Carousel.Caption>
                                        <h3>Stats #2</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={900} height={500} alt="900x500" src={image2} />
                                    <Carousel.Caption>
                                        <h3>Stats #3</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                                <div className="pull-right">
                                    <hr className="my-4" />
                                <button type="button" className="btn btn-primary btn-sm"><i className="pe-7s-download"/> Export</button>
                                    &nbsp;&nbsp;
                                <button type="button" className="btn btn-secondary btn-sm"><i className="pe-7s-mail"/> Send</button>
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-secondary btn-sm"><i className="pe-7s-print"/> Print</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default StatsPage;
