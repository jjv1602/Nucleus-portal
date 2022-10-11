import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ErrorMsg from '../../../ErrorMsg/ErrorMsg';
import Loading from '../../../Loading/Loading';
import { listEvents, rsvp, rsvp_add_name, rsvp_remove_name } from '../../../Store/Actions/eventActions';
import { Accordion, Badge, Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../ViewEvents/ViewEvents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleActions } from '../../../Store/Store';
const ViewEvents = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const eventList = useSelector((state) => state.event.userEvent);

  const { loading, error } = eventList;
  const [search, setSearch] = useState("");
  const userLogin = useSelector((state) => state.login.userLogin);
  const { userInfo } = userLogin;
  const events = useSelector((state) => state.event.events);
  // const token=JSON.parse(localStorage.getItem('userInfo')).token;
  useEffect(() => {
    dispatch(listEvents());
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo, events]);

  return (
    <>
      <section className='events'>
        <h1 id='heading_events'> Browse Events  </h1>
        <br></br>
        <Form style={{ width: "70%", margin: "auto" ,marginTop:"0%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Search Event .....  "
              onChange={(e) => setSearch(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Form>
        {events && events.filter((filteredEvent)=> filteredEvent.title_of_event.toLowerCase().includes(search.toLowerCase()))
        .reverse().map((single) => (
          <Card id="card" key={single._id}>
            <Card.Header id='header'>{single.title_of_event}</Card.Header>
            <Card.Body>
              <Card.Title id='content'>{single.content}</Card.Title>
              <Card.Text id='text'>
                <b>Date : </b>{single.date_of_event.substring(0, 10)} <br></br>
                <b>Time : </b>{single.time_of_event}

              </Card.Text>
              {single.rsvp.includes(JSON.parse(localStorage.getItem('userInfo')).name) &&
                <Button variant="success" onClick={() => {
                  dispatch(rsvp_remove_name(single._id));
                }}

                > <div><i className="fa-solid fa-check"></i></div>   RSVP</Button>
              }

              {
                single.seats_of_event - single.rsvp.length !== 0 && !single.toggle && !single.rsvp.includes(JSON.parse(localStorage.getItem('userInfo')).name) &&
                <Button onClick={() => {
                  dispatch(rsvp_add_name(single._id));
                }}> RSVP</Button>
              }

              {/* <div style={{display:"flex",height:"40px",width:"90px",backgroundColor: "#201c34",fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSize:"10px"}}>{single.rsvp.length}  Seats Left </div> */}
              <Badge pill bg="dark" style={{ marginLeft: "10%", height: "35px", padding: "10px", fontSize: "15px" }}>{single.seats_of_event - single.rsvp.length}  Seats Left </Badge>
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
