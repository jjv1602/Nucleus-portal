import React from 'react'

import './start_pg.css';
// import Login from '../LoginPg/Login';
import Header from '../Header/Header';
import { Button } from 'react-bootstrap'
const StartPg = () => {
  return (
    <>
      <body>

        <section className='sec1'>
          <section className='sec1_img'>
            <Header />
            <section className='login'>
              <div style={{ color: "white", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", position: "absolute", top: "10%", left: "14%", right: "10%", fontSize: "40px" }}> Event Management Portal </div>
              <Button variant="primary" type="submit" style={{ position: "absolute", left: "20%", width: "28%", top: "60%", height: "20%", fontSize: "30px" }} onClick="">
                Login
              </Button>
              <Button variant="primary" type="submit" style={{ position: "absolute", right: "20%", width: "28%", top: "60%", height: "20%", fontSize: "30px" }} onClick="">
                Sign Up
              </Button>
            </section>
          </section>
        </section>
      </body>
    </>
  )
}

export default StartPg
