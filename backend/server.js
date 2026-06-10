import express from 'express';
import cors from'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';

const app=express();
const port=4000;



//MIDDLEWARES

app.use(cors()); //frontend ko backend access karne ki permission deta hai (cross origin resource sharing);
app.use(clerkMiddleware()); //authentication and identification ke liye ;
app.use(express.json({limit:"20mb"})); //json ki size 20mb se upar nhi lega and express json ko pars(apne convienience ke hisaab se data ko convert karna) nhi kar pata thats why we body-parser
app.use(express.urlencoded({limit:"20mb",extended:true})); //its is used for form data and extended nested data ko allow karta hai .

//DATABASE
connectDB();


//ROUTES

app.get('/',(req,res)=>{
    res.send("✅ API WORKING")
})
app.listen(port,()=>{
    console.log(`✅ Server started on http://localhost:${port}`)
})
