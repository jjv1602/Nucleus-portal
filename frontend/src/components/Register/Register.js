import { Children, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

import React from 'react'
import ErrorMsg from "../ErrorMsg/ErrorMsg"
import Loading from "../Loading/Loading"
import { Link } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"
import { toggleActions } from '../Store/Store';

const Register = ({ title, children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [errormsgpwd, setErrormsg] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const submitHandler = async (par) => {

        par.preventDefault()  //imp line for submit form
        // console.log(email,password);
        if (password != confirmpassword) {
            setErrormsg("Passwords do not match");
        }else{
            setErrormsg(null);
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
                
                setLoading(true);
                setError(false);
                const { data } = await axios.post('/api/users', {
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
        // sending data to API
       

    }

    const dispatch=useDispatch();
    const LoginPage=()=>{
      dispatch(toggleActions.login());
    }
    return (
        <>
            <section className='Register_pg'>
                <section id="cardt">Register  </section><br></br><br></br><br></br>
                {/* <MainScreen title="LOGIN PAGE" > */}
                <div>
                    {/* if error message present  */}
                    {errormsgpwd && <ErrorMsg variant="danger">{errormsgpwd}</ErrorMsg>}
                    {/* {loading && <Loading/>} */}

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
                            <Form.Control type="password" placeholder="  &#xf023;  Confirm Password" onChange={(p) => setConfirmPassword(p.target.value)} style={{ fontFamily: "FontAwesome", fontSize: "20px", borderRadius: "20px" }}
                            />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Create Account
                        </Button>
                    </Form>
                    <Row className="py-3" style={{ padding: "40px" }} >
                        <Col>Already an Account ? <Link to="/login" onClick={LoginPage}  style={{ color: "rgb(80, 80, 240)", textDecoration: "underline" }}>Login Here</Link></Col>
                    </Row>
                </div>
                {/* </MainScreen> */}

            </section>
        </>
    )
}

export default Register
