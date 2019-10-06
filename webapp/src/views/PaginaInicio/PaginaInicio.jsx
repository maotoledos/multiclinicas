//Imports
import React, { Component } from "react";
import { Grid, Row, Col, ProgressBar } from "react-bootstrap";
import PropTypes from 'prop-types';

//App Imports
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentWillMount() {

    
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12} >
              <div className="jumbotron">
                
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}



export default HomePage;
