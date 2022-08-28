import React from 'react'
import{ useSelector } from 'react-redux'

import './start_pg.css';
// import Login from '../LoginPg/Login';
import Header from '../Header/Header';
import { Button, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Login from '../LoginPg/Login';
import Register from '../Register/Register'
import Store from '../Store/Store'
const StartPg = () => {
  const want_to_login=useSelector(state=>state.toggle.want_to_login);
  return (
    <>
      <body>

        <section className='sec1'>
          <section className='sec1_img'>
            <CardGroup style={{ position: "absolute", top: "20%", left: "14%", right: "10%", height: "50%" }}>
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
                  {want_to_login &&<Login/>}
                  {!want_to_login && <Register/>}
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
