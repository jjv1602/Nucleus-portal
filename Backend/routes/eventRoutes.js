const express=require('express');
const { getEvents, createEvent, getEventById, updateEvent, deleteEvent } = require('../Controllers/eventController');
const { protect } = require('../middlewares/authMiddleware');
const router=express.Router()

// To get all the events
router.route('/').get(protect, getEvents);  //protect is middleware
//here on get request it would send getEvents res.json file 

// to create a event
router.route('/create').post(protect, createEvent);

// suppose we get a route of id so we should be able to get the the event , edit (put) the event and delete the event so we add .get() .put and .delete()
router.route('/:id').get(getEventById).put(protect,updateEvent).delete(deleteEvent);
      

module.exports=router;