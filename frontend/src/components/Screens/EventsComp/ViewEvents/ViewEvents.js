import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ErrorMsg from '../../../ErrorMsg/ErrorMsg';
import Loading from '../../../Loading/Loading';
import { listEvents } from '../../../Store/Actions/eventActions';
import { Accordion, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../ViewEvents/ViewEvents.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { toggleActions } from '../../../Store/Store';
const ViewEvents = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const eventList = useSelector((state) => state.event.userEvent);
  const rsvp = useSelector((state) => state.toggle.rsvp);
  const { loading, error } = eventList;

  const userLogin = useSelector((state) => state.login.userLogin);
  const { userInfo } = userLogin;
  const events = useSelector((state) => state.event.events);
  // const token=JSON.parse(localStorage.getItem('userInfo')).token;
  useEffect(() => {
    dispatch(listEvents());

    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const rsvp_button = () => {
    
    dispatch(toggleActions.rsvp());
  }
  

  
  return (
    <>
      {/* {error && <ErrorMsg msg={error}></ErrorMsg>} */}
    <section className='events'>
      <h1 id='heading_events'> Browse Events  </h1>
      {loading && <Loading />}
      {events && events.map((single) => (
        <Card id="card" key={single._id}>
          <Card.Header id='header'>{single.title_of_event}</Card.Header>
          <Card.Body>
            <Card.Title id='content'>{single.content}</Card.Title>
            <Card.Text id='text'>
              <b>Date : </b>{single.date_of_event.substring(0,10)} <br></br>
              <b>Time : </b>{single.time_of_event}
              
            </Card.Text>
           {rsvp && <Button variant="success" style={{display:"flex"}} onClick={rsvp_button}> <div style={{paddingRight:"8px"}}><i className="fa-solid fa-check"></i></div>   RSVP</Button>}
           {!rsvp && <Button variant="primary" onClick={rsvp_button}> RSVP</Button>}
          </Card.Body>
        </Card>
        
      ))}
      <br></br>
      <br></br>
    </section>
    </>
  )
}


export default ViewEvents
