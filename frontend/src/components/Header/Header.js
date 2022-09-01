import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
  return (
    <Navbar expand="lg" id='navt' >
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
      <Container>
       <Nav className="me-auto" id="mea" >
         <Nav.Link href="#home" id="topic" >Home</Nav.Link>
         <Nav.Link href="#pricing" id="topic">View Events</Nav.Link>
         <Nav.Link href="#pricing" id="topic">Organize Events </Nav.Link>
         <Nav.Link href="#pricing" id="ltopic">Logout</Nav.Link>
       </Nav>
       </Container>
      </Navbar.Collapse>
    {/* trbl */}
    
      
     
   </Navbar>
  );
}

export default Header
