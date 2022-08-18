import React from 'react'
import { Button, Form } from 'react-bootstrap'
const Login = () => {
  return (
    <>

      <div style={{ color: "white", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", position: "absolute", left: "40%", fontSize: "40px" }}> Login </div>
      <Form>
        <Form.Group>
          <Form.Select size="lg" style={{ position: "absolute", left: "10%", width: "80%", top: "30%", height: "20%", backgroundColor: "white" }}>
            <option style={{ textAlign: "center" }}>Please Select your Role</option>
            <option value="1" style={{ textAlign: "center" }}>Participant</option>
            <option value="2" style={{ textAlign: "center" }}>Administrator</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ position: "absolute", left: "32%", width: "40%", top: "60%", height: "20%" }} onClick="">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login
