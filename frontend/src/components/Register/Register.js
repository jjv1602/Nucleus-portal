import { Children, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

import React from 'react'
import ErrorMsg from "../ErrorMsg/ErrorMsg"
import Loading from "../Loading/Loading"
import { Link } from "react-router-dom"
import axios from "axios"


const Register = ({ title, children }) => {
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
            setError(false);
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
            setError(error.response.data.message);
            setError(true);
            setLoading(false);
        }

    }
    return (
        <>
            <section className='Register_pg'>
                <section id="cardt">Register  </section><br></br><br></br><br></br>
                {/* <MainScreen title="LOGIN PAGE" > */}
                <div>
                    {/* {error && <ErrorMsg/>}
          {loading && <Loading/>} */}

                    <Form onSubmit={submitHandler} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="  &#xf007; Enter Name " onChange={(e) => setEmail(e.target.value)} style={{ fontFamily: "FontAwesome", fontSize: "20px", borderRadius: "20px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="  &#xf007;  Enter Email address " onChange={(e) => setEmail(e.target.value)} style={{ fontFamily: "FontAwesome", fontSize: "20px", borderRadius: "20px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicPassword" style={{ paddingTop: "20px" }}>
                            <Form.Control type="password" placeholder="  &#xf023;    Password" onChange={(p) => setPassword(p.target.value)} style={{ fontFamily: "FontAwesome", fontSize: "20px", borderRadius: "20px" }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicPassword" style={{ paddingTop: "20px" }}>
                            <Form.Control type="password" placeholder="  &#xf023;  Confirm Password" onChange={(p) => setPassword(p.target.value)} style={{ fontFamily: "FontAwesome", fontSize: "20px", borderRadius: "20px" }}
                            />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Create Account
                        </Button>
                    </Form>
                    <Row className="py-3" style={{ padding: "40px" }} >
                        <Col>Already an Account ? <Link to="/login" style={{ color: "rgb(80, 80, 240)", textDecoration: "underline" }}>Login Here</Link></Col>
                    </Row>
                </div>
                {/* </MainScreen> */}

            </section>
        </>
    )
}

export default Register
