import express from 'express';
import cors from'cors';
import 'dotenv/config';

const app=express();
const port=4000;

//MIDDLEWARES

//DATABASE

//ROUTES

app.get('/',(req,res)=>{
    res.send("API WORKING")
})
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
