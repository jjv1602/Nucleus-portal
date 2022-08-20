import React from 'react';
import {  Container, Nav, Navbar} from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar style={{position:"absolute",width:"100%"}} bg="light" expand="lg">
    <Container >
      <Navbar.Brand href="#home"><b>VIT EVENT MANAGEMENT PORTAL </b> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{position:'absolute', left:"40%",paddingLeft:"10%",paddingRight:"10%" , fontSize:"20px" ,fontFamily: "'Trebuchet MS'",color:"black"}}>
          <Nav.Link href="#home"><b>Home</b></Nav.Link>
          <Nav.Link href="#link"><b>View Events</b></Nav.Link>
          <Nav.Link href="#link"><b>Register Events</b></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header
