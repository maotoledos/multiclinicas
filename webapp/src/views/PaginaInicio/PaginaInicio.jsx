import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Result, Icon} from 'antd';


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
  <center>
              <Result
    icon={<Icon  style={{ fontSize: '150px'}} type="smile" theme="twoTone" />}
    extra={<h3>Nice to see you again!</h3>}
  />
          </center>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}



export default HomePage;
