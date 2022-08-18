import { Children } from "react"
import { Container, Row } from "react-bootstrap"

import React from 'react'

const Register = ({ title, children }) => {
    return (
        <Container>
            <Row>
                <div className="header">{
                    title && (
                        <>
                            <h1 className="heading">{title}</h1>
                            <hr></hr>
                        </>
                    )
                }{children}</div>
            </Row>
        </Container>
    )
}

export default Register
