import React from 'react'

import './start_pg.css';
import Login from '../LoginPg/Login';
import Header from '../Header/Header';
const StartPg = () => {
  return (
    <>
     <body>    
        <section className='sec1'>
          <section className='sec1_img'>
              <section className='nav'>
                  <Header/>
              </section>

              <section className='login'>
                <Login/>
              </section>
            </section>  
        </section>
     </body>
    </>
  )
}

export default StartPg
