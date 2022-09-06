const expressAsyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const Event=require("../models/eventModel");
const getEvents=expressAsyncHandler(async(req,res)=>{

    // this would display all the notes irrespective of user  
    const events=await Event.find();
    console.log
    // to find display event created by a particular mail 
    // const Event = await Event.find({ user: req.user._id });
    res.json(events);

});
const getEventscreatedbyparticularperson=expressAsyncHandler(async(req,res)=>{
    // to find display event created by a particular mail 

    const Events = await Event.find({ user: user_id });
    res.json(Events);
});

const createEvent = expressAsyncHandler(async (req, res) => {
    const { title_of_event,content,time_of_event,date_of_event} = req.body;

    if (!title_of_event || !content || !time_of_event || !date_of_event) {
      res.status(400);
      throw new Error("Please Fill all the feilds");
      return;
    } else {
      // here user_id is coming from authMiddleware see line 20
      const event = new Event({title_of_event, content, time_of_event ,date_of_event,user:user_id });  
  
      const createdEvent = await event.save(); // after saving it is going to send a note which we are saving in createdNote and in next line we storing that event inside json
  
      res.status(201).json(createdEvent);
    }
  });
  
const getEventById=expressAsyncHandler(async(req,res)=>{

  const event=await Event.findById(req.params.id); // derive id from url using req.params.id
  // if id exists then display event
  if(event){
    res.json(event);
  }
  else{
    res.status(404).json({message:"No Event"})
  }

})
const updateEvent=expressAsyncHandler(async(req,res)=>{

  const { title_of_event, content, time_of_event,date_of_event} = req.body;

  const event = await Event.findById(req.params.id);

  // checking whether user who made the event is the same user who is updating
  if (event.user.toString() !== user_id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action as your are not creator of event");
  }

  if (event) {
    event.title_of_event = title_of_event;
    event.content = content;
    event.time_of_event = time_of_event;
    event.date_of_event = date_of_event;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
})

const deleteEvent = expressAsyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event.user.toString() !== user_id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  if (event) {
    await event.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});



module.exports={getEvents,createEvent,getEventById,updateEvent,deleteEvent,getEventscreatedbyparticularperson};