import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { listuserCreatedEvents } from '../../../Store/Actions/eventActions'
import { deleteEvent } from '../../../Store/Actions/eventActions'
import { toggleActions } from '../../../Store/Store';
import '../EditEvents/GetEvents.css'
const GetEvents = () => {
  const rsvp_btn = useSelector((state) => state.toggle.rsvp);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.userCreatedEvents);
  const userLogin = useSelector((state) => state.login.userLogin);
  const [flag, setFlag] = useState(new Map());
  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(listuserCreatedEvents());
  }, [userInfo, events]);   // important putting events inside useEffect so whenever delete takes place events would update and map value would also be updated

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteEvent(id));
    }
  }

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
              <Button variant="primary" style={{ margin: "1%" }} active href={`/events/${single._id}`}>
                EDIT
              </Button>
              <Button variant="primary" style={{ margin: "1%" }} active onClick={() => deleteHandler(single._id)}>
                Delete
              </Button>
              <Button variant="success" style={{ margin: "1%" }} onClick={() => {
                if(flag.get(single._id)){
                  setFlag(new Map(flag.set(single._id,false)));
                }
                else{
                  setFlag(new Map(flag.set(single._id,true)));
                }
                
              }}>
                View RSVP List
              </Button>
              {flag.get(single._id) &&

                <Card>

                  <Card.Header>RSVP LIST</Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      {single.rsvp.map((i, index) => (

                        <ListGroup.Item >{index + 1} - {i}</ListGroup.Item>
                      ))
                      }

                    </ListGroup>
                  </Card.Body>
                </Card>
              }

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
