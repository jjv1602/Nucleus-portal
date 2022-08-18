const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB=require("./config/db");

app.get("/",(req,res)=>{
    res.send("API is running");
})
dotenv.config();
connectDB();

const port_v=process.env.PORT || 5000;
app.listen(port_v,console.log(`Server started on port ${port_v} `));