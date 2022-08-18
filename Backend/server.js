const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB=require("./config/db");
const userRoutes=require("./routes/userRoutes")


dotenv.config();
connectDB();
app.use(express.json());
app.use('/api/users',userRoutes);

// app.get("/",(req,res)=>{
//     res.send("API is running");
// })

const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT} `));