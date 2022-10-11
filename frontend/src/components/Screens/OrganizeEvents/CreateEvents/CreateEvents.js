import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../../../ErrorMsg/ErrorMsg"
import { createEventAction } from '../../../Store/Actions/eventActions';
const CreateEvents = () => {
  const [title_of_event, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time_of_event, setTime] = useState("");
  const [date_of_event, setDate] = useState("");
  const [seats_of_event, setSeats] = useState("");
  const [dateError, setdateError] = useState(false);
  const success=useSelector((state)=>state.event.success);
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title_of_event);
    // console.log(content);
    // console.log(time_of_event);
    // console.log(date_of_event);

    var temp = new Date(date_of_event);
    if (temp < new Date()) {
      setdateError(true);
      return;
    }
    else {
      setdateError(false);
      dispatch(createEventAction(title_of_event,content,time_of_event,date_of_event,seats_of_event));
      resetHandler();   //to clear data after submit is clicked
     
    }
  }

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setSeats("");
    setTime("");
    setDate("");
  };
  return (
    <>
      <section style={{ margin: "25px", paddingBottom: "25px" }}>

        {/* If user enters event date which has already passed  */}

        <Card>
          <Card.Header>Create a new Event</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="title">
                <Form.Label>Title of the Event</Form.Label>
                <Form.Control
                  type="title"
                  value={title_of_event}
                  placeholder="Enter the title of event"
                  onChange={(e) => setTitle(e.target.value)}
                  required // important making this box compulsory to fill
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="content">
                <Form.Label>Describe your event </Form.Label>
                <Form.Control
                  as="textarea"
                  value={content}
                  placeholder="Describe your event "
                  rows={2}  // height of the input box
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="">
                <Form.Label>Total Seats for the Event</Form.Label>
                <Form.Control
                  type="number"
                  value={seats_of_event}
                  placeholder="Enter tota; seats"
                  onChange={(e) => setSeats(e.target.value)}
                  required // important making this box compulsory to fill
                />
              </Form.Group>
              <br></br>
              {dateError && <ErrorMsg msg="You have entered wrong date  Your event date has already passed 😐"></ErrorMsg>}
              <Form.Group controlId="content" style={{ width: "50%" }}>
                <Form.Label>Date of Event</Form.Label>
                <br></br>
                <Form.Control
                  type="date"
                  value={date_of_event}
                  name="date_of_event"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />

              </Form.Group>
              <br></br>
              <Form.Group controlId="content" style={{ width: "50%" }}>
                <Form.Label >Time of Event </Form.Label>
                <br></br>
                <Form.Control
                  type="time"
                  value={time_of_event}
                  name="time_of_event"
                  onChange={(e) => setTime(e.target.value)}
                  required
                />

              </Form.Group>
              <br></br>
              {/* {loading && <Loading size={50} />} */}
              <Button type="submit" variant="primary" onClick={submitHandler}>
                Create Event
              </Button>
              {/* <Button className="mx-2" onClick={resetHandler} variant="danger"> */}
              <Button className="mx-2" variant="danger" onClick={resetHandler}>
                Reset Feilds
              </Button>
            </Form>
          </Card.Body>

          <Card.Footer className="text-muted">
            Creating on - {new Date().toLocaleDateString()}
          </Card.Footer>
        </Card>
      </section>
    </>
  )
}

export default CreateEvents
