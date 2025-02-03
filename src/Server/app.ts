import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoute from '../routes/userRoute'
import{Request, Response, NextFunction} from 'express'

import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const app = express()

app.use(express.json())

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', userRoute)



export default app

