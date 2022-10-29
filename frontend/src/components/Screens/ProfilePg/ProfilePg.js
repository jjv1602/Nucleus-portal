import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import classes from './ProfilePg.module.css'

const ProfilePg = () => {
    const [pic, setPic] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picMessage, setPicMessage] = useState();
    const dispatch = useDispatch();
    // const userLogin = useSelector((state) => state.userLogin);

    // const userUpdate = useSelector((state) => state.userUpdate);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [checkoldpwd,setOldpwd]=useState(false);
    const checkpwd=()=>{
        setOldpwd(true);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        // dispatch(updateProfile({ name, email, password, pic }));
    };
    return (
        <div className={classes.body}>
            <Header ></Header>

            <Alert className={classes.head}>
                <Alert.Heading> <b style={{ fontSize: "7vh" }}> EDIT PROFILE</b> <br></br>
                    You can view and update your profile </Alert.Heading>
            </Alert>

            <section className={classes.sec1}  >
                <section className={classes.left}>

                    <Form className={classes.form} >
                        <Form.Group controlId="email">
                            <Form.Label>Update Name </Form.Label>
                            <Form.Control
                                placeholder="Update Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <br></br>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>To Change Password </b> <br></br> Enter Old Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" onClick={()=>{checkpwd()}} style={{marginBottom:"5%"}}>Check Old Password </Button>
                        <br></br>
                        {checkoldpwd &&
                        <>
                         <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Enter New Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Confirm Password </b> </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        </>
                        }
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </section>
                <section className={classes.right}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </section>
            </section>
        </div>
    )
}

export default ProfilePg
