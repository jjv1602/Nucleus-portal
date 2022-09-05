import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { listuserCreatedEvents } from '../../../Store/Actions/eventActions'
import '../EditEvents/GetEvents.css'
const GetEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.userCreatedEvents);
  const userLogin = useSelector((state) => state.login.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(listuserCreatedEvents());
    console.log(events);
    if (!userInfo) {

    }
  }, [userInfo]);

  return (
    <>
      {/* {error && <ErrorMsg msg={error}></ErrorMsg>} */}
      <section className='events'>

        {events && events.map((single) => (
          <Card id="card" key={single._id}>
            <Card.Header id='header'>{single.title_of_event}</Card.Header>
            <Card.Body>
              <Card.Title id='content'>{single.content}</Card.Title>
              <Card.Text id='text'>
                <b>Date : </b>{single.date_of_event.substring(0, 10)} <br></br>
                <b>Time : </b>{single.time_of_event}
              </Card.Text>
              <Button variant="primary" style={{margin:"1%"}} active>
                EDIT 
              </Button>
              <Button variant="primary" style={{margin:"1%"}} active>
                Delete
              </Button>
            </Card.Body>
          </Card>

        ))}
        <br></br>
        <br></br>
      </section>
    </>
  )
}

export default GetEvents
