import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import MainScreen from '../MainScreen/MainScreen';
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitHandler = async (par) => {

    par.preventDefault()  //imp line for submit form
    // console.log(email,password);

    // sending data to API
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

      setLoading(true);
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    }
    catch (error) {
      // setError(error.response.data.message);
    }

  }
  return (
    <>

      <Header />
      <MainScreen title="LOGIN PAGE">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(p) => setPassword(p.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>New Customer ? <Link to="/register">Register Here</Link></Col>
        </Row>
      </MainScreen>

    </>
  );
}

export default Login
