import React from 'react'
import Header from '../Header/Header'
import classes from './LandingPg.module.css'
const LandingPg = () => {
  return (
    <div className='q'>
      <Header></Header>
      <section className={classes.sec1}>
        <section id={classes.tit_sec}>
          <section id={classes.tit_sec_title}>VIEW <br></br>ORGANIZE,<br></br> PARTICIPATE IN EVENTS </section>
        </section>
      </section>
    </div>
  )
}

export default LandingPg
