import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/nhrybbrv.png'
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
      <Navbar.Brand id='Navbar_brand' style={{backgroundImage:`url(${logo})`}}></Navbar.Brand>
      <Navbar.Toggle id="toggle"/>
      <Navbar.Collapse>
        <Container style={{marginTop:"2%"}}>
          <Nav className="me-auto" id="mea" >
            <Nav.Link href="/landingscreen" id="topic" >Home</Nav.Link>
            <Nav.Link href="/organizeevent" id="topic"> + Host Event </Nav.Link>
            <Nav.Link href="/profile" id="topic"> + Profile </Nav.Link>
            <Nav.Link href="/" id="ltopic" onClick={logHandler}>+ Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
      {/* trbl */}



    </Navbar>
  );
}

export default Header
