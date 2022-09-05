const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const eventSchema = mongoose.Schema(
    {
        title_of_event: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        time_of_event: {
            type: String,
            required: true,
        },
        date_of_event: {
            type: Date,
            required: true,
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User",  
            // this means it would call user model which is declared in userModel.js see line 43 in userModel.js
        },
    },
    {
        timestamps: true,
    }
);

const Event=mongoose.model('Event',eventSchema);
module.exports=Event;