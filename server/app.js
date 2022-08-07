
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

import {} from 'dotenv/config'
import { getRequest, postRequest, signUpRequest } from './controllers/controller.js';


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})

app.get("/todos", getRequest)

app.post(("/todo/new"), postRequest)

// Creating database when user sign up
app.post(("/todo/user"), signUpRequest)


app.listen(process.env.PORT || 9000, (req, res)=>{
    console.log("server is running")
})