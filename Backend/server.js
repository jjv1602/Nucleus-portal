const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
const connectDB=require("./config/db.js");
const userRoutes=require("./routes/userRoutes");

const { errorHandler, notFound } = require('./middlewares/errorMiddlewares');

dotenv.config({ path: path.resolve(__dirname, '../.env') });;

connectDB();
const app=express();
app.use(express.json());
app.use('/api/users',userRoutes);
// Adding middleware error files
// notFound error when user sends post or get request to wrong URL's
app.use(notFound)
app.use(errorHandler)
// app.get("/",(req,res)=>{
//     res.send("API is running");
// })

const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT} `));
