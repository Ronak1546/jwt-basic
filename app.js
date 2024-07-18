import express from "express";
import 'dotenv/config';
import "express-async-errors"//no use of try catch blocks automatically handled
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';
import userRoutes from './route/userRoutes.js';

const app=express();
const port=process.env.PORT||5000;
app.use(express.json())
app.use(express.static('./public'))//site for html

app.use('/api/v1/',userRoutes)//route path we are using
app.get("/",(req,res)=>{res.send("<h1>JWT BASIC</h1>")});//
app.use(notFound);
app.use(errorHandler)
app.listen(port,console.log("server is running at",port));