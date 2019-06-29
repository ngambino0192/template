import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Logo from "./NavLogo";

const NavbarComponent = class extends React.Component {
  render() {
    return (
      <Navbar bg="dark">
        <Nav.Item>
          <Nav.Link>Vacations</Nav.Link>
          <Nav.Link>Planning</Nav.Link>
          <Nav.Link>Travel Tips</Nav.Link>
          <Nav.Link>Shaka TV</Nav.Link>
        </Nav.Item>
      </Navbar>
    );
  }
};

export default NavbarComponent;
