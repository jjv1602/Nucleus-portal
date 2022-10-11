import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card, Form, ListGroup } from 'react-bootstrap';
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
  const [mail, setMail] = useState("");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
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
  const getMail = (name) => async () => {
    // setOpen(!open)
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/getmail",
        { name },
        config
      );
      // console.log(data);
      setMail(data.email);

    } catch (error) {

    }
  }

  return (
    <>
      <section className='events2'>

      <Form style={{width:"70%",margin:"auto"}}>
      <Form.Group  className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="email" placeholder=" Search Event .....   " 
        onChange={(e) => setSearch(e.target.value)} style={{textAlign:"center",height:"50px", fontSize: "25px",border:"5px solid #44bbb7"}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
    </Form>

        {events && events
        .filter((filteredEvent)=> filteredEvent.title_of_event.toLowerCase().includes(search.toLowerCase()))
        .reverse()
        .map((single) => (
         <Accordion>        
          <Card id="card" key={single._id}>
          
          <Card.Header id='header'>{single.title_of_event}</Card.Header>
            
            <Card.Body>
              <Card.Title id='content'>{single.content}</Card.Title>
              <Card.Text id='text'>
                <b>Date : </b>{single.date_of_event.substring(0, 10)} <br></br>
                <b>Time : </b>{single.time_of_event}
                <Badge pill bg="dark" style={{ marginLeft: "10%", height: "35px", padding: "10px", fontSize: "15px" }}>{single.seats_of_event - single.rsvp.length}  Seats Left </Badge>
              </Card.Text>
              <Button variant="primary" style={{ margin: "1%" }} active href={`/events/${single._id}`}>
                EDIT
              </Button>
              <Button variant="primary" style={{ margin: "1%" }} active onClick={() => deleteHandler(single._id)}>
                Delete
              </Button>
              <Button variant="success" style={{ margin: "1%" }} onClick={() => {
                if (flag.get(single._id)) {
                  setFlag(new Map(flag.set(single._id, false)));
                }
                else {
                  setFlag(new Map(flag.set(single._id, true)));
                }

              }}>
                View RSVP List
              </Button>

              {flag.get(single._id) &&  //flaf is defined in view rsvp list
                <div>
                  <br></br>
                  <div style={{
                    fontSize: "4vh",
                    fontFamily: "Trebuchet MS", marginLeft:"30%"
                  }}
                  >RSVP List for Event - <b>{single.title_of_event} </b> </div>
                  <Accordion flush >
                  {single.rsvp.map((i, index) => (
                    <>
                    
                    <Accordion.Item eventKey={index} style={{margin:"auto",marginBottom:"0",width:"80%"}}>
                    <Accordion.Header  onClick={getMail(i)}  style={{border:"0.1px solid #000000"}} >
                              {index + 1} - {i}
                      </Accordion.Header>
                      <Accordion.Body style={{border:"0.5px solid #000000", fontSize: "2vh",fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>    
                              <b>Email Address : </b>  {mail} 
                      </Accordion.Body>    
                      <br></br>
                      </Accordion.Item>
                      
                    </>

                  ))
                  }
                  </Accordion>
                </div>

              }

            </Card.Body>
          </Card>
    
          </Accordion>
        ))}
        <br></br>
        <br></br>
      </section>

    </>
  )
}

export default GetEvents
