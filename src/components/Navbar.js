import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


const NavbarComp = () => {
  return (

        <div> 
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/Home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Calculator">Calculator</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              style={{ marginRight: "5px" }}
            >
              <NavDropdown.Item href="#add">Add</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  
  );
};

export default NavbarComp;
