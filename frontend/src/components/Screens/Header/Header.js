import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import {logout} from '../Store/Actions/userActions';
import { logout } from '../../Store/Actions/userActions';
import './Header.css'
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logHandler=()=>{
    dispatch(logout());
    
  }



  return (
    <Navbar expand="lg" id='navt' >
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle id="toggle"/>
      <Navbar.Collapse>
        <Container>
          <Nav className="me-auto" id="mea" >
            <Nav.Link href="#home" id="topic" >Home</Nav.Link>
            <Nav.Link href="/landingscreen" id="topic">View Events</Nav.Link>
            <Nav.Link href="/organizeevent" id="topic">Organize Events </Nav.Link>
            <Nav.Link href="/" id="ltopic" onClick={logHandler}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
      {/* trbl */}



    </Navbar>
  );
}

export default Header
