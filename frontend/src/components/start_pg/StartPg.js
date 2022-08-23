import React from 'react'

import './start_pg.css';
// import Login from '../LoginPg/Login';
import Header from '../Header/Header';
import { Button, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Login from '../LoginPg/Login';
const StartPg = () => {
  return (
    <>
      <body>

        <section className='sec1'>
          <section className='sec1_img'>
            {/* <section className='login'>
              <div style={{ color: "white", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", position: "absolute", top: "10%", left: "14%", right: "10%", fontSize: "40px" }}> Welcome to Event Management Portal </div>
              <Link to="/login">
              <Button variant="primary" type="submit" style={{ position: "absolute", left: "20%", width: "28%", top: "60%", height: "20%", fontSize: "30px" }}>
                Login
              </Button>
              </Link>
              <Button variant="primary" type="submit" style={{ position: "absolute", right: "20%", width: "28%", top: "60%", height: "20%", fontSize: "30px" }} onClick="">
                Sign Up
              </Button> */}
            <CardGroup style={{ position: "absolute", top: "25%", left: "14%", right: "10%", height: "50%" }}>
              <Card  style={{backgroundColor:"#242442"}}>
                <Card.Body>
                  
                  <Card.Text>
                    <section id="heading" >Event Management Portal </section>
                   <section id="body"> 
                    You can sign in to access with your 
                    existing account
                    </section>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                 <Card.Body>
                    <Login/>
                </Card.Body>
              </Card>
            </CardGroup>
          </section>
        </section>
      </body>
    </>
  )
}

export default StartPg
