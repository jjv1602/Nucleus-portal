import React from 'react'
import { Accordion } from 'react-bootstrap'
import ViewEvents from '../EventsComp/ViewEvents/ViewEvents'
import Header from '../Header/Header'
import classes from './LandingPg.module.css'
import 'animate.css';
const LandingPg = () => {
  return (
    <div className='q'>
      <Header ></Header>
      <section className={classes.sec1} >
        <section id={classes.tit_sec} className='animate__animated animate__bounceInUp' style={{animationDuration: "2s"}}>
          <section id={classes.tit_sec_title}  >VIEW <br></br>ORGANIZE,<br></br> PARTICIPATE IN EVENTS </section>
        </section>
      </section>
     
      <ViewEvents></ViewEvents>
    </div>
  )
}

export default LandingPg
