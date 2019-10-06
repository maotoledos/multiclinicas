import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../users/api/actions";

class HeaderLinks extends Component {
  logout(event){
    event.preventDefault();
    this.props.logout();
    this.context.router.history.push('/')
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <Nav pullRight>
        <NavItem eventKey={1} href="/home">
          Inicio
          </NavItem>
        <NavDropdown
          eventKey={2}
          title="Notificaciones"
          noCaret
          id="basic-nav-dropdown"
        >
          <MenuItem eventKey={2.1}>Notification 1</MenuItem>
          <MenuItem eventKey={2.2}>Notification 2</MenuItem>
          <MenuItem eventKey={2.3}>Notification 3</MenuItem>
          <MenuItem eventKey={2.4}>Notification 4</MenuItem>
          <MenuItem eventKey={2.5} href="/habitaciones">Ver todos</MenuItem>
        </NavDropdown>

        <NavItem eventKey={4} href="#" onClick={this.logout.bind(this)}>
          Logout
        </NavItem>
      </Nav>
    );

    const guestLinks = (
      <Nav pullRight>
        <NavItem eventKey={1} href="/home">
          Home
          </NavItem>
        <NavItem eventKey={2} href="#">
          Requests
            </NavItem>
        <NavDropdown
          eventKey={2}
          title="Notifications"
          noCaret
          id="basic-nav-dropdown"
        >
          <MenuItem eventKey={2.1}>Notification 1</MenuItem>
          <MenuItem eventKey={2.2}>Notification 2</MenuItem>
          <MenuItem eventKey={2.3}>Notification 3</MenuItem>
          <MenuItem eventKey={2.4}>Notification 4</MenuItem>
          <MenuItem eventKey={2.5} href="/notifications">View All</MenuItem>
        </NavDropdown>

        <NavItem eventKey={4} href="#">
          Login
        </NavItem>
      </Nav>
    );


    return (
      <div>

        {isAuthenticated ? userLinks : guestLinks}

      </div >
    );
  }
}

HeaderLinks.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

HeaderLinks.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(HeaderLinks);
