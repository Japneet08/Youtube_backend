require('dotenv').config()
const path =require('path')
const express= require
("express")

const cors=require('cors')
const cookieParser=require('cookie-parser')

const app=express()
app.use(cors({
  origin:process.env.CORS_ORIGIN
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())

module.exports={app}