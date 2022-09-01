import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios'
import Loading from '../Loading/Loading';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import './Login.css';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { toggleActions,loginActions } from '../Store/Store';
import {login} from '../Store/Actions/userActions';

const Login = () => {
  const history=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
 
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.login.userLogin);
  const { loading, error, userInfo } = userLogin;
  // const err=useSelector((state)=>state.login.error);
 

  useEffect(() => {
    if (userInfo) {
      history("/landingscreen");
    }
  }, [history,userInfo]);

  const submitHandler = async (par) => {

    par.preventDefault()  //imp line for submit form
    // console.log(email,password);

    // sending data to API
    dispatch(login(email,password)); 
  }

  // Calling Store Redux to toggle between login and register page
  const registerPage = () => {
    dispatch(toggleActions.register());
  }

  return (
    <>
      <section className='Login_pg'>
        <section id="cardt">Sign In </section><br></br><br></br><br></br>
        <div>
          {error && <ErrorMsg msg={error}></ErrorMsg>}
          {loading && <Loading />}

          <Form onSubmit={submitHandler} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="  &#xf007;  Username or email " onChange={(e) => setEmail(e.target.value)} style={{ fontFamily: "FontAwesome", fontSize: "20px", borderRadius: "20px" }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword" style={{ paddingTop: "20px" }}>
              <Form.Control type="password" placeholder="  &#xf023;    Password" onChange={(p) => setPassword(p.target.value)} style={{ fontFamily: "FontAwesome", fontSize: "20px", borderRadius: "20px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Row className="py-3" style={{ padding: "40px" }} >
            <Col>New Customer ? <Link to="/register" onClick={registerPage} style={{ color: "rgb(80, 80, 240)", textDecoration: "underline" }}>Register Here</Link></Col>
          </Row>
        </div>

      </section>
    </>
  );
}

export default Login
