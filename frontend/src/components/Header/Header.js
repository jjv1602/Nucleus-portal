import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar  style={{ width: "100%",backgroundColor:"rgb(0, 0, 0)"}} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">View Events</Nav.Link>
            <Nav.Link href="#pricing">Register Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header
