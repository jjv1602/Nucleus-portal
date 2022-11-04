import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card, Form, ListGroup, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getmailid, listuserCreatedEvents } from '../../../Store/Actions/eventActions'
import { deleteEvent, cleararr } from '../../../Store/Actions/eventActions'
import { toggleActions } from '../../../Store/Store';
import { CSVDownload, CSVLink } from "react-csv";
import classes from '../EditEvents/GetEvents.module.css';
import "aos/dist/aos.css"
import Aos from "aos";
import RsvpTable from './RsvpTable/RsvpTable';


const GetEvents = () => {
  const rsvp_btn = useSelector((state) => state.toggle.rsvp);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.userCreatedEvents);
  const userLogin = useSelector((state) => state.login.userLogin);
  const [search, setSearch] = useState("");
  const [count_of_rsvp, setCount] = useState(0);
  const [flag, setFlag] = useState(new Map());
  const [down, setDown] = useState(new Map());
  const [datafetched, setdatafetched] = useState(false);
  const [show, setShow] = useState(new Map());
  const { userInfo } = userLogin;
  const [exceldata, setExcelData] = useState([]);
  var newArr =[];
var i=1;
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  useEffect(() => {
    dispatch(listuserCreatedEvents());
  }, [userInfo, events]);
  // important putting events inside useEffect so whenever delete takes place events would update and map value would also be updated
  useEffect(() => {

  }, [exceldata])
  useEffect(() => { }, [datafetched]);
  const deleteHandler = (id) => {
    console.log("delet handler");
    if (window.confirm("Are you sure?")) {
      dispatch(deleteEvent(id));
    }
  }

  const headers = [
    {
      label: "Name", key: "name"
    },
    {
      label: "Email", key: "email"
    },
    {
      label: "Contact", key: "contact"
    },
    {
      label: "Date and Time of RSVP", key: "date"
    }

  ]

  const csvLink = {
    headers: headers,
    data: exceldata,
    filename: "csvfile.csv",
  }



  return (
    <>
      <section className={classes.events2}>

        <Form style={{ width: "70%", margin: "auto" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Control type="email" placeholder=" Search Event .....   "
              onChange={(e) => setSearch(e.target.value)} style={{ textAlign: "center", height: "50px", fontSize: "25px", border: "5px solid #44bbb7" }} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Form>

        {events && events
          .filter((filteredEvent) => filteredEvent.title_of_event.toLowerCase().includes(search.toLowerCase()))
          .reverse()
          .map((single) => (
            <>
            <Accordion>
              <Card id={classes["card"]} key={single._id}>
                <Card.Header id={classes["header"]}>{single.title_of_event}</Card.Header>

                <Card.Body>
                  <Card.Title id={classes["content"]}>{single.content}</Card.Title>
                  <Card.Text id={classes["text"]}>
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
                  <Button variant="primary" onClick={() => {

                    setExcelData(single.rsvp);
                    { console.log(single.rsvp) }
                    { console.log("single.rsvp...................") }
                    if (down.get(single._id)) {
                      setShow(new Map(down.set(single._id, false)));
                      setDown(new Map(down.set(single._id, false)));
                    }
                    else {
                      setDown(new Map(down.set(single._id, true)));
                      setShow(new Map(down.set(single._id, true)));
                    }
                  }}
                  > <CSVLink {...csvLink} style={{color:"#ffffff"}}>
                  Click to download data..
                </CSVLink> </Button>

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
                    <>
                      <div>
                        <br></br>
                        <div style={{
                          fontSize: "4vh",
                          fontFamily: "Trebuchet MS", marginLeft: "30%"
                        }}
                        >RSVP List for Event - <b>{single.title_of_event} </b> </div>
                        {/* {console.log(single.rsvp)} */}

                      </div>
                        
                        <RsvpTable list={single.rsvp} id_of_event={single._id}></RsvpTable>
                      
                      </>
                  }

              </Card.Body>
            </Card>

            </Accordion>
            <br></br>
            <br></br>

            </>
          ))}
      <br></br>
      <br></br>
    </section>

    </>
  )
}

export default GetEvents